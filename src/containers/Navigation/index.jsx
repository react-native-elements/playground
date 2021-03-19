import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Helmet } from "react-helmet";

import Footer from "../../components/Footer";

// Pages
import HomePage from "../../pages/home";
import ExplorePage from "../../pages/explore";
// Playground
import Avatar from "../../content/Avatar";
import Button from "../../content/Button";
import Badge from "../../content/Badge";
import Tile from "../../content/Tile";
import Card from "../../content/Card";
import ToolTip from "../../content/ToolTip";
import Text from "../../content/Text";
import SocialIcon from "../../content/SocialIcon";
import Slider from "../../content/Slider";
import SearchBar from "../../content/SearchBar";
import Rating from "../../content/Rating";
import AirbnbRating from "../../content/AirbnbRating";
import Pricing from "../../content/Pricing";
import Overlay from "../../content/Overlay";
import ListItem from "../../content/ListItem";
import Input from "../../content/Input";
import Image from "../../content/Image";
import Icon from "../../content/Icon";
import Header from "../../content/Header";
import CheckBox from "../../content/CheckBox";
import BottomSheet from "../../content/BottomSheet";
import ButtonGroup from "../../content/ButtonGroup";
import Divider from "../../content/Divider";

export const Components_Index = [
  {
    name: "Avatar",
    component: Avatar,
    path: "/avatar",
  },
  {
    name: "Badge",
    component: Badge,
    path: "/badge",
  },
  {
    name: "BottomSheet",
    component: BottomSheet,
    path: "/bottom-sheet",
  },
  {
    name: "Button",
    component: Button,
    path: "/button",
  },
  {
    name: "ButtonGroup",
    component: ButtonGroup,
    path: "/button-group",
  },
  {
    name: "Card",
    component: Card,
    path: "/card",
  },
  {
    name: "CheckBox",
    component: CheckBox,
    path: "/checkbox",
  },

  {
    name: "Divider",
    component: Divider,
    path: "/divider",
  },

  {
    name: "Header",
    component: Header,
    path: "/header",
  },

  {
    name: "Icon",
    component: Icon,
    path: "/icon",
  },

  {
    name: "Image",
    component: Image,
    path: "/image",
  },

  {
    name: "Input",
    component: Input,
    path: "/input",
  },

  {
    name: "ListItem",
    component: ListItem,
    path: "/list-item",
  },

  {
    name: "Overlay",
    component: Overlay,
    path: "/overlay",
  },

  {
    name: "Pricing",
    component: Pricing,
    path: "/pricing",
  },

  {
    name: "Rating",
    component: Rating,
    path: "/rating",
  },
  {
    name: "Rating (Airbnb)",
    component: AirbnbRating,
    path: "/airbnb-rating",
  },

  {
    name: "SearchBar",
    component: SearchBar,
    path: "/search-bar",
  },

  {
    name: "Slider",
    component: Slider,
    path: "/slider",
  },
  {
    name: "SocialIcon",
    component: SocialIcon,
    path: "/social-icon",
  },
  {
    name: "Text",
    component: Text,
    path: "/text",
  },
  {
    name: "Tile",
    component: Tile,
    path: "/tile",
  },
  {
    name: "ToolTip",
    component: ToolTip,
    path: "/tooltip",
  },
];

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        {Components_Index.map((elm, idx) => {
          return (
            <Route key={idx} path={elm.path} exact>
              <Helmet>
                <title>
                  {elm.name} | Playground 🚀 - React Native Elements
                </title>
              </Helmet>
              <elm.component />
            </Route>
          );
        })}
        <Route exact path="/explore">
          <Helmet>
            <title>Explore | Playground <span role="img" aria-label="playground">🚀</span> - React Native Elements</title>
          </Helmet>
          <ExplorePage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}
