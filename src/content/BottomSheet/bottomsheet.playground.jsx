import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { BottomSheet, Text } from "react-native-elements";

import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";

const BottomSheetPlayground = () => {
  const params = useView({
    componentName: "BottomSheet",
    props: {
      children: {
        type: PropTypes.ReactNode,
        value: `<Text>Some Content</Text>`,
      },
      isVisible: {
        type: PropTypes.Boolean,
        value: false,
      },
      modalProps: {
        type: PropTypes.Object,
        value: `{ presentationStyle: "fullScreen" , visible:true}`,
        description: "Modal Props -> https://reactnative.dev/docs/modal",
      },
      containerStyle: {
        value: `{}`,
        type: PropTypes.Object,
      }
    },
    scope: {
      BottomSheet,
      Text,
    },
    imports: {
      "react-native-elements": {
        named: ["BottomSheet", "Text"],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default BottomSheetPlayground;
