import * as React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import Modal from "modal-react-native-web";

import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";

const OverlayPlayground = () => {
  const params = useView({
    componentName: "Overlay",
    props: {
      backdropStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
      children: {
        type: PropTypes.ReactNode,
        value: `<Text>Some content</Text><TouchableOpacity onPress={()=>setIsVisible(!isVisible)}><Text>Click to close</Text></TouchableOpacity>`,
      },
      isVisible: {
        type: PropTypes.Boolean,

        defaultValue: false,

        stateful: true,
      },
      fullScreen: {
        type: PropTypes.Boolean,
        value: false,
      },
      ModalComponent: {
        type: PropTypes.Object,
        value: `Modal`,
      },
      onBackdropPress: {
        type: PropTypes.Function,
        value: `() => setIsVisible(!isVisible)`,
      },
      overlayStyle: {
        type: PropTypes.Object,
        value: `{}`,
      },
    },
    scope: {
      Overlay,
      Modal,
      Text,
      TouchableOpacity,
    },
    imports: {
      "react-native-elements": {
        named: ["Overlay", "Text", "TouchableOpacity"],
      },
      "modal-react-native-web": {
        default: "Modal",
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default OverlayPlayground;
