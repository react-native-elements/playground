import React from "react";

import { Drawer, Fab } from "@material-ui/core";

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <React.Fragment>
        <Fab
          style={{
            position: "fixed",
            right: "0.5rem",
            bottom: "1rem",
          }}
          variant="extended"
          size="small"
          color="secondary"
          onClick={toggleDrawer("right", true)}
        >
          Prop Explorer
        </Fab>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          <div
            style={{
              width: "70vw",
              maxWidth: 700,
              paddingLeft: "1rem",
            }}
          >
            {props.children}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
