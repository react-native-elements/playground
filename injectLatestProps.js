const { execSync } = require("child_process");
const findRemoveSync = require("find-remove");
const cpDir = require("copy-dir");

/*
 * 1. find and delete any directory named react-native-elements
 * 2. find and delete any directory named Props
 * 3. clone the react-native-elements(https://github.com/react-native-elements/react-native-elements) repo
 * 4. copy Props folder from cloned repo into our project
 */

try {
  // Point 1. depth=1 required (to avoid deleting node_modules/react-native-elements)
  let result = findRemoveSync(".", {
    maxLevel: 1,
    dir: "react-native-elements",
  });
  console.log("✔️ Removed ?: ", result);

  // Point 2
  result = findRemoveSync("./src/content", { dir: "Props" });
  console.log("✔️ Removed ?: ", result);

  // Point 3
  execSync(
    "git clone https://github.com/react-native-elements/react-native-elements --depth=1",
    (err, stdout, stderr) => {
      if (err) {
        // node couldn't execute the command
        return;
      }
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );
  console.log("✔️ Cloned react-native-elements");

  // Point 4
  cpDir.sync(
    "./react-native-elements/website/docs/main/props",
    "./src/content/Props"
  );
  console.log("✔️ Copied Props to src/content/Props");
} catch (err) {
  console.error(err);
  return;
}
