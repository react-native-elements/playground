import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  progress: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
}
