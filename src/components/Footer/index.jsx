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
        <Grid item xs={12} md={6} lg={4} xl={3}>
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

          <a
            href="https://opencollective.com/react-native-elements/sponsor/4/website"
            rel="nofollow"
            target="_blank"
          >
            <img
              src="https://camo.githubusercontent.com/b443d021e16d36526e1e49c8a9ec2a162245a625ee7699f557e28ddfbe79176f/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f72656163742d6e61746976652d656c656d656e74732f73706f6e736f722f342f617661746172"
              alt="React Native Elements Backer"
              data-canonical-src="https://opencollective.com/react-native-elements/sponsor/4/avatar"
            />
          </a>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
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
          <Typography variant="caption">v{pjson.version}</Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
