import React from "react";
import { Typography, Grid, Paper, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

import LBannerAnimation from "./animation.jsx";

function HomePage() {
  return (
    <div>
      <Grid container spacing={5} justify="center" alignItems="center">
        <Grid item md={6} sm={12}>
          <Typography
            variant="h2"
            className={styles.home__header}
          >
            Exploring possibilities
          </Typography>
          <Typography
            variant="h6"
            className={styles.home__headerbottom}
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
      <div className={styles.home__explorenow}>
        <Link to="/explore">
          <Button variant="outlined" color="secondary">
            <Typography variant="h6">Explore Now 🌇</Typography>
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

      <Divider className={styles.home__divider} />
      <hr className={styles.home__line}/>
      <Grid
        container
        spacing={5}
        justify="center"
        className={styles.home__grid}
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
    <Paper className={styles.home__paper}>
      <img className={styles.home__image}
        src={props.banner}
      />
      <div className={styles.home__insidepaper}>
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
