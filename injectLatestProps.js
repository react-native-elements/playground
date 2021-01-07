const { exec } = require("child_process");
exec(
  "svn export https://github.com/react-native-elements/react-native-elements/trunk/website/docs/props ./src/content/Props",
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
