import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";

import { Components_Index } from "../../containers/Navigation";

function Expore() {
  return (
    <section>
      <Typography variant="h2">Explore</Typography>

      <Grid container spacing={1} style={{ marginTop: 20 }}>
        {Components_Index.map((elm, idx) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Link to={elm.path}>
                <Paper
                  style={{
                    height: 60,
                    padding: "5px 10px",
                    alignItems: "center",
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <Typography variant="h5">{elm.name}</Typography>

                  <ArrowForward style={{ position: "absolute", right: 10 }} />
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
