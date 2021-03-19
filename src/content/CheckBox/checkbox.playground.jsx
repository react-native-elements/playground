import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";

const HeaderPlayground = () => {
  const params = useView({
    componentName: "CheckBox",
    props: {
      center: {
        type: PropTypes.Boolean,
        value: false,
      },
      checked: {
        type: PropTypes.Boolean,
        value: false,
      },
      checkedColor: {
        type: PropTypes.String,
        value: "#0F0",
      },
      checkedIcon: {
        type: PropTypes.Object,
        value: ``,
        description: `string OR React Native Component	`,
      },
      checkedTitle: {
        type: PropTypes.String,
        value: `Great!`,
      },
      Component: {
        type: PropTypes.ReactNode,
        value: null,
        description: "React Native Component",
      },
      containerStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      fontFamily: {
        type: PropTypes.String,
        value: null,
      },
      iconRight: {
        type: PropTypes.Boolean,
        value: false,
      },
      iconType: {
        type: PropTypes.String,
        value: null,
      },
      onIconPress: {
        type: PropTypes.Function,
        value: `() => console.log("onIconPress()")`,
      },
      onLongIconPress: {
        type: PropTypes.Function,
        value: `() => console.log("onLongIconPress()")`,
      },
      onLongPress: {
        type: PropTypes.Function,
        value: `() => console.log("onLongPress()")`,
      },
      onPress: {
        type: PropTypes.Function,
        value: `() => console.log("onPress()")`,
      },
      right: {
        type: PropTypes.Boolean,
        value: false,
      },
      size: {
        type: PropTypes.Number,
        value: 30,
      },
      textStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      title: {
        type: PropTypes.Object,
        value: `"Check for Awesomeness"`,
      },
      titleProps: {
        type: PropTypes.Object,
        value: `{}`,
      },
      uncheckedColor: {
        type: PropTypes.String,
        value: `#F00`,
      },
      uncheckedIcon: {
        type: PropTypes.Object,
        value: null,
        description: "string OR React Native Component",
      },
    },
    scope: {
      CheckBox,
    },
    imports: {
      "react-native-elements": {
        named: ["CheckBox"],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default HeaderPlayground;
