const path = require("path");
const {
  override,
  addBabelPlugins,
  babelInclude,
  addWebpackAlias,
} = require("customize-cra");

module.exports = override(
  ...addBabelPlugins("@babel/plugin-proposal-class-properties"),
  babelInclude(
    [
      path.resolve(__dirname, "node_modules/react-native-elements"),
      path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      path.resolve(__dirname, "node_modules/react-native-ratings"),
      path.resolve(__dirname, "src"),
    ],
    addWebpackAlias({
      "react-native/Libraries/Components/UnimplementedViews/UnimplementedView":
        "react-native-web/dist/modules/UnimplementedView",
      "react-native$": "react-native-web",
      "react-native-linear-gradient": "react-native-web-linear-gradient",
    })
  )
);
