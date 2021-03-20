import React from "react";
import { Typography, Grid, Paper, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import LBannerAnimation from "./animation.jsx";

function HomePage() {
  return (
    <div>
      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item md={6} sm={12}>
          <Typography
            variant="h2"
            style={{
              fontSize: "calc(2rem + 6 * ((100vw - 320px) / 680))",
            }}
          >
            Exploring possibilities
          </Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: "200", fontStyle: "italic" }}
          >
            with React Native Elements
          </Typography>
        </Grid>
        <Grid item md={6} sm={12}>
          <div style={{}}>
            <LBannerAnimation />
          </div>
        </Grid>
      </Grid>
      <div style={{ width: "100%", textAlign: "center", marginBottom: "2rem" }}>
        <Link to="/explore">
          <Button variant="outlined" color="secondary">
            <Typography variant="h6">Explore Now <span role="img" aria-label="explore">🌇</span></Typography>
          </Button>
        </Link>
      </div>
      <Grid container spacing={1} justify="center">
        {FEATURES_LIST.map((feature, idx) => {
          return (
            <Grid item xs={6} md={4} lg={3} key={idx}>
              <FeatureCard {...feature} />
            </Grid>
          );
        })}
      </Grid>

      <Divider style={{ margin: "3vh 0" }} />
      <Grid
        container
        spacing={5}
        justify="center"
        style={{ justifyContent: "space-evenly" }}
      >
        <Grid item xs={12} md={7} lg={6}>
          <Typography variant="h5">Why?</Typography>
          <Typography>
            React Native Elements houses a lot of components, and these
            components come with a lot of customisation and tweaks via props.
            Sometimes the user gets confused and wastes a lot of time in
            achieving the desired result.
            <br />
            We came across a lot of such questions every day and sometimes user
            reports bugs which aren't bugs but just improper
            implementation/usage of the components.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <Typography variant="h5">How it solves the problem?</Typography>
          <Typography>
            With Playground, users can explore components and tweak them as per
            their use-case and generate production-ready code. Or they can
            explore new possibilities with the components and improve the
            overall experience.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;

const FeatureCard = (props) => {
  return (
    <Paper style={{ padding: "14px 7px", height: "100%" }}>
      <img
        style={{
          width: "70%",
          minHeight: 250,
          margin: "auto",
          display: "flex",
        }}
        alt="playground-banner"
        src={props.banner}
      />
      <div style={{ bottom: 0, marginTop: "1rem" }}>
        <Typography variant="h5">{props.title}</Typography>
        <Typography>{props.content}</Typography>
      </div>
    </Paper>
  );
};

const FEATURES_LIST = [
  {
    banner: require("../../assets/SVG/design.svg"),
    title: "Design",
    content: "From Design -> Code.",
  },
  {
    banner: require("../../assets/SVG/tweak.svg"),
    title: "Tweak",
    content: "Tweak components for the best-fit.",
  },
  {
    banner: require("../../assets/SVG/explore.svg"),
    title: "Explore",
    content: "Explore new possibilities",
  },
  {
    banner: require("../../assets/SVG/bootstrap.svg"),
    title: "Bootstrap",
    content: "Shhh... Generate code, bootstrap applications and relax.",
  },
];
