const path = require("path");
const {
  override,
  addBabelPlugins,
  babelInclude,
  addWebpackAlias,
  addBabelPresets,
} = require("customize-cra");

module.exports = override(
  ...addBabelPresets([
    "@babel/preset-env",
    "@babel/preset-react",
    {
      useBuiltIns: "entry",
      corejs: { version: "3" },
      targets: {
        browsers: ["> 1%", "last 2 versions"],
        node: true,
      },
      modules: "auto",
    },
  ]),
  ...addBabelPlugins("@babel/plugin-proposal-class-properties"),
  babelInclude(
    [
      path.resolve(__dirname, "node_modules/react-native-elements"),
      path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      path.resolve(__dirname, "node_modules/react-native-ratings"),
      path.resolve(__dirname, "src"),
    ],
    addWebpackAlias({
      "react-native$": "react-native-web",
      "react-native-linear-gradient": "react-native-web-linear-gradient",
    })
  )
);
