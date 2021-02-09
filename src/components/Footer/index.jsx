import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Grid,
  ListItem,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import pjson from "../../../package.json";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "2rem",
        width: "100%",
        background: "#212121",
        color: "#fafafa",
        padding: "1rem",
        bottom: 0,
      }}
    >
      <Grid container spacing={5} justify="center">
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h4" style={{ marginBottom: 10 }}>
            Playground 🚀
          </Typography>

          <Divider />

          <a
            href="https://github.com/react-native-elements/playground"
            target="_blank"
          >
            <Typography>GitHub Repositoy</Typography>
          </a>

          <a href="https://reactnativeelements.com/" target="_blank">
            <Typography>Official Docs</Typography>
          </a>
          <br />

          <a href="https://www.netlify.com">
            <img
              src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <a
            href="https://github.com/react-native-elements/react-native-elements/"
            target="_blank"
          >
            <Typography variant="h6">React Native Elements</Typography>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "200", fontStyle: "italic" }}
            >
              Cross-Platform React Native UI Toolkit
            </Typography>

            <img
              src={require("../../assets/RNE_Logo.png")}
              style={{ width: 150, padding: "1rem 0", display: "block" }}
            />

            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/react-native-elements/react-native-elements?style=social"
            />
            {"  "}
            <img
              alt="npm"
              src="https://img.shields.io/npm/dm/react-native-elements?style=social"
            />
          </a>
          <br />

          <Typography variant="caption">
            Playground is using react-native-elements v{pjson.version}
          </Typography>
          <br />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
