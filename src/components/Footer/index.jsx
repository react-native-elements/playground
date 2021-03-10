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
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
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
              className={styles.netlify_img}
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
              className={styles.footer_product_info}
            >
              Cross-Platform React Native UI Toolkit
            </Typography>

            <img
              src={require("../../assets/RNE_Logo.png")}
              className={styles.footer_product_img}
            />

            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/react-native-elements/react-native-elements?style=social"
              className={styles.footer_github_img}
            />
            {"  "}
            <img
              alt="npm"
              src="https://img.shields.io/npm/dm/react-native-elements?style=social"
              className={styles.footer_github_img}
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
