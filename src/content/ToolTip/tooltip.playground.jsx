import * as React from "react";
import { Tile, Tooltip, Text } from "react-native-elements";
import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";
import Modal from "modal-react-native-web";

const ToolTipPlayground = () => {
  const params = useView({
    componentName: "Tooltip",
    props: {
      popOver: {
        value: `<Text>PopOver Content</Text>`,
        type: PropTypes.ReactNode,
      },
      children: {
        value: `<Text>Hello, There</Text>`,
      },
      ModalComponent: {
        value: `Modal`,
        type: PropTypes.Object,
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
