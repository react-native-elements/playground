import * as React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";

import Playground from "../../components/playground";
import { useView, PropTypes } from "react-view";

const DividerPlayground = () => {
  const params = useView({
    componentName: "Divider",
    props: {
      style: {
        type: PropTypes.Object,
        value: `{width:"80%",margin:20}`,
      },
    },
    scope: {
      Divider,
    },
    imports: {
      "react-native-elements": {
        named: ["Divider"],
      },
    },
  });

  return (
    <React.Fragment>
      <Playground params={params} />
    </React.Fragment>
  );
};

export default DividerPlayground;
