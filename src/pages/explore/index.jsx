import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";
import styles from "./Explore.module.css"
import { Components_Index } from "../../containers/Navigation";

function Expore() {
  return (
    <section>
      <Typography variant="h2">Explore</Typography>

      <Grid container spacing={1} className={styles.gridContainer} >
        {Components_Index.map((elm, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link to={elm.path}>
                <Paper className={styles.paperPosition}>
                  <Typography variant="h5">{elm.name}</Typography>
                  <ArrowForward className={styles.arrow} />
                </Paper>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
}

export default Expore;