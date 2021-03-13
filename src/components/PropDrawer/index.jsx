import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import { Drawer, Fab } from "@material-ui/core";
import styles from "./PropDrawer.module.css";
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
        <Fab className={styles.propdrawer}
          
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
          <div className={styles.propdrawer__child}>
            {props.children}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
