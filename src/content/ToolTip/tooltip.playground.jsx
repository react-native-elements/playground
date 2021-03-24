import * as React from "react";
import { Tile, Tooltip, Text } from "react-native-elements";
import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";
import Modal from "modal-react-native-web";

const ToolTipPlayground = () => {
  const params = useView({
    componentName: "Tooltip",
    props: {
      popover: {
        value: `<Text>PopOver Content</Text>`,
        type: PropTypes.ReactNode,
      },
      children: {
        value: `<Text>Hello, There</Text>`,
      },
      backgroundColor: {
        value: ``,
        type: PropTypes.String,
      },
      closeOnlyOnBackdropPress: {
        value: false,
        type: PropTypes.Boolean,
      },
      containerStyle: {
        value: `{}`,
        type: PropTypes.Object,
      },
      height: {
        value: 40,
        type: PropTypes.Number,
      },
      width: {
        value: 150,
        type: PropTypes.Number,
      },
      highlightColor: {
        value: 'transparent',
        type: PropTypes.String,
      },
      ModalComponent: {
        value: `Modal`,
        type: PropTypes.Object,
      },
      onClose: {
        value: `() => console.log("onClose()")`,
        type: PropTypes.Function,
      },
      onOpen: {
        value: `() => console.log("onOpen()")`,
        type: PropTypes.Function,
      },
      overlayColor: {
        value: `rgba(250, 250, 250, 0.70)`,
        type: PropTypes.String,
      },
      pointerColor: {
        value: ``,
        type: PropTypes.String,
      },
      skipAndroidStatusBar: {
        value: false,
        type: PropTypes.Boolean,
      },
      toggleAction: {
        value: ``,
        type: PropTypes.String,
      },
      toggleOnPress: {
        value: true,
        type: PropTypes.Boolean,
      },
      withOverlay: {
        value: true,
        type: PropTypes.Boolean,
      },
      withPointer: {
        value: true,
        type: PropTypes.Boolean,
      },
    },
    scope: {
      Tooltip,
      Text,
      Modal,
    },
    imports: {
      "react-native-elements": {
        named: ["Tooltip", "Text"],
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

export default ToolTipPlayground;
