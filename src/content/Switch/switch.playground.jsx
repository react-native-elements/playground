import * as React from "react";
import { Switch, useTheme } from "react-native-elements";
import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";

const SwitchPlayground = () => {
  const { theme } = useTheme();
  const params = useView({
    componentName: "Switch",
    props: {
      color: {
        value: theme.colors.primary,
        type: PropTypes.String,
        description: "Color",
      },
      value: {
        value: false,
        type: PropTypes.Boolean,
        description: "Value",
        stateful: true,
      },
      onValueChange: {
        value: "() => setValue(!value)",
        propHook: {
          what: "!value",
          into: "value",
        },
        type: PropTypes.Function,
        description: "Function called when switch state is changed.",
      },
    },
    scope: {
      Switch,
    },
    imports: {
      "react-native-elements": {
        named: ["Switch"],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default SwitchPlayground;
