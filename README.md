<p align="center">
  <a href="https://reactnativeelements.com/">
    <img alt="react-native-elements" src="https://user-images.githubusercontent.com/5962998/65694309-a825f000-e043-11e9-8382-db0dba0851e3.png" width="300">
  </a>
</p>

<p align="center">
<b><a href="https://reactnative.dev">React Native Elements</a> Playground 🚀 </b> <br/>
   React Native elements Playground is An interactive component playground. Which allows you to interact with different React Native Element Components.
</p>
<hr/>
<p align="center">
  <a href="https://www.npmjs.com/package/react-native-elements"><img src="https://img.shields.io/npm/v/react-native-elements.svg"></a>
  <a href="https://github.com/react-native-elements/react-native-elements"><img src="https://img.shields.io/github/stars/react-native-elements/playground"></a>
  <a href="https://react-native-elements-slack.herokuapp.com"><img src="https://react-native-elements-slack.herokuapp.com/badge.svg"></a>
</p>

<p align="center">
  <a href="#backers"><img src="https://opencollective.com/react-native-elements/backers/badge.svg"></a>
  <a href="#sponsors"><img src="https://opencollective.com/react-native-elements/sponsors/badge.svg"></a>
  <a href="https://codecov.io/gh/react-native-elements/react-native-elements"><img src="https://codecov.io/gh/react-native-elements/react-native-elements/coverage.svg"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href ="https://reactnativeelements.com/" ><img src="https://img.shields.io/badge/-React%20Native%20Elements-blue"/></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/-React-blue"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
  <a href="https://netlify.com"><img src="https://img.shields.io/badge/deployed%20on-netlify-blue" />  
  
</p>

<br />
<hr/>

![React Native Elements UI Toolkit](https://raw.githubusercontent.com/tewarig/images/main/Screenshot%20from%202021-03-10%2019-44-18.png)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
```sh
npm install npm@latest -g
```
* [Node.js](https://nodejs.org/en/)


### Installation

1. Clone the repo
```sh
git clone  https://github.com/react-native-elements/playground.git
```
2. Install NPM packages
```sh
npm install
```


## Components included:

- [x] [Avatar](https://reactnativeelements.com/docs/avatar)
- [x] [Badge](https://reactnativeelements.com/docs/badge)
- [x] [BottomSheet](https://reactnativeelements.com/docs/bottomsheet)
- [x] [Button](https://reactnativeelements.com/docs/button)
- [x] [ButtonGroup](https://reactnativeelements.com/docs/button_group)
- [x] [Card](https://reactnativeelements.com/docs/card)
- [x] [CheckBox](https://reactnativeelements.com/docs/checkbox)
- [x] [Divider](https://reactnativeelements.com/docs/divider)
- [x] [Header](https://reactnativeelements.com/docs/header)
- [x] [HTML style headings](https://reactnativeelements.com/docs/text)
- [x] [Icon](https://reactnativeelements.com/docs/icon)
- [x] [Image](https://reactnativeelements.com/docs/image)
- [x] [Input](https://reactnativeelements.com/docs/input)
- [x] [ListItem](https://reactnativeelements.com/docs/listitem)
- [x] [Overlay](https://reactnativeelements.com/docs/overlay)
- [x] [Pricing](https://reactnativeelements.com/docs/pricing)
- [x] [Rating](https://reactnativeelements.com/docs/rating)
- [x] [SearchBar](https://reactnativeelements.com/docs/searchbar)
- [x] [Slider](https://reactnativeelements.com/docs/slider)
- [x] [Social Icons / Social Icon Buttons](https://reactnativeelements.com/docs/social_icon)
- [x] [Tile](https://reactnativeelements.com/docs/tile)
- [x] [Tooltip](https://reactnativeelements.com/docs/tooltip)



## Folder Structure
```
├── config-overrides.js
├── LICENSE
├── package.json
├── patches
│   └── @react-native-community+toolbar-android+0.1.0-rc.2.patch
├── public
│   ├── CNAME
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   ├── _redirects
│   ├── robots.txt
│   └── thumbnail.png
├── README.md
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── assets
    │   ├── RNE_Logo.png
    │   ├── sample.jpg
    │   └── SVG
    │       ├── bootstrap.svg
    │       ├── design.svg
    │       ├── explore.svg
    │       └── tweak.svg
    ├── components
    │   ├── Footer
    │   │   └── index.jsx
    │   ├── playground
    │   │   └── index.jsx
    │   └── PropDrawer
    │       └── index.jsx
    ├── containers
    │   ├── Drawer
    │   │   └── index.jsx
    │   ├── index.jsx
    │   └── Navigation
    │       └── index.jsx
    ├── content
    │   ├── AirbnbRating
    │   │   ├── index.jsx
    │   │   └── searchbar.playground.jsx
    │   ├── Avatar
    │   │   ├── avatar.mdx
    │   │   ├── avatar.playground.jsx
    │   │   └── index.jsx
    │   ├── Badge
    │   │   ├── badge.mdx
    │   │   ├── badge.playground.jsx
    │   │   └── index.jsx
    │   ├── BottomSheet
    │   │   ├── bottomsheet.playground.jsx
    │   │   └── index.jsx
    │   ├── Button
    │   │   ├── button.mdx
    │   │   ├── button.playground.jsx
    │   │   └── index.jsx
    │   ├── ButtonGroup
    │   │   ├── buttongroup.playground.jsx
    │   │   └── index.jsx
    │   ├── Card
    │   │   ├── card.playground.jsx
    │   │   └── index.jsx
    │   ├── CheckBox
    │   │   ├── checkbox.playground.jsx
    │   │   └── index.jsx
    │   ├── Divider
    │   │   ├── divider.playground.jsx
    │   │   └── index.jsx
    │   ├── Header
    │   │   ├── header.playground.jsx
    │   │   └── index.jsx
    │   ├── Icon
    │   │   ├── icon.playground.jsx
    │   │   └── index.jsx
    │   ├── Image
    │   │   ├── index.jsx
    │   │   └── input.playground.jsx
    │   ├── Input
    │   │   ├── index.jsx
    │   │   └── input.playground.jsx
    │   ├── ListItem
    │   │   ├── index.jsx
    │   │   └── listitem.playground.jsx
    │   ├── Overlay
    │   │   ├── index.jsx
    │   │   └── overlay.playground.jsx
    │   ├── Pricing
    │   │   ├── index.jsx
    │   │   └── pricing.playground.jsx
    │   ├── Rating
    │   │   ├── index.jsx
    │   │   └── searchbar.playground.jsx
    │   ├── SearchBar
    │   │   ├── index.jsx
    │   │   └── searchbar.playground.jsx
    │   ├── Slider
    │   │   ├── index.jsx
    │   │   └── slider.playground.jsx
    │   ├── SocialIcon
    │   │   ├── index.jsx
    │   │   └── socialicon.playground.jsx
    │   ├── Text
    │   │   ├── index.jsx
    │   │   └── tooltip.playground.jsx
    │   ├── Tile
    │   │   ├── index.jsx
    │   │   └── tile.playground.jsx
    │   ├── ToolTip
    │   │   ├── index.jsx
    │   │   └── tooltip.playground.jsx
    │   └── utils
    │       └── createReactViewBaseConfig.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── pages
    │   ├── explore
    │   │   └── index.jsx
    │   └── home
    │       ├── animation.json
    │       ├── animation.jsx
    │       └── index.jsx
    └── serviceWorker.js


```

## Releated Projects
 <a href="https://reactnativeelements.com/">
    <img alt="react-native-elements" src="https://user-images.githubusercontent.com/5962998/65694309-a825f000-e043-11e9-8382-db0dba0851e3.png" width="300">
 </a>
 <a href="http://rne-storybook.surge.sh/">
    <img alt="react-native-elements-storybook" src="https://user-images.githubusercontent.com/17120764/56100603-19199580-5f45-11e9-96a6-dd80f61b4932.png" width="450">
  </a>

## Documentation

[View the full docs of React Native elements  here](https://reactnativeelements.com/docs/overview)

## Contributing

Interested in contributing to this repo? Check out our
[Contributing Guide](https://reactnativeelements.com/docs/contributing)
and submit a PR for a new feature/bug fix.

A big shoutout to all our contributors! You could be here too!

<a href="https://github.com/react-native-elements/react-native-elements/graphs/contributors"><img src="https://opencollective.com/react-native-elements/contributors.svg?width=890&button=false" /></a>


### First Contributors

We encourage everyone to contribute & submit PR's especially first-time
contributors. Look for the label `Good First Issue` on the issues. Click
[here](https://github.com/react-native-elements/playground/labels/%F0%9F%91%B6%20Good%20First%20Issue)
to see them.

If there is something you's like to see or request a new feature, please submit
an
[issue](https://github.com/react-native-elements/playground/issues/new)
or a
[pull request](https://github.com/react-native-elements/playground/pulls).

### Core Contributors

We are currently looking for new core contributors that can help lead this project.

[Learn more here](https://github.com/react-native-elements/react-native-elements/issues/2222)

### Slack Community

In case you have any other question or would like to come say **Hi!** to the RNE
community, join our [Slack team](https://react-native-elements-slack.herokuapp.com).
See you on the other side! 👋😃

## Backers

[Become a backer](https://opencollective.com/react-native-elements#backer) and show your support for React Native Elements.

[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/0/avatar)](https://opencollective.com/react-native-elements/backer/0/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/1/avatar)](https://opencollective.com/react-native-elements/backer/1/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/2/avatar)](https://opencollective.com/react-native-elements/backer/2/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/3/avatar)](https://opencollective.com/react-native-elements/backer/3/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/4/avatar)](https://opencollective.com/react-native-elements/backer/4/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/5/avatar)](https://opencollective.com/react-native-elements/backer/5/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/6/avatar)](https://opencollective.com/react-native-elements/backer/6/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/7/avatar)](https://opencollective.com/react-native-elements/backer/7/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/8/avatar)](https://opencollective.com/react-native-elements/backer/8/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/9/avatar)](https://opencollective.com/react-native-elements/backer/9/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/10/avatar)](https://opencollective.com/react-native-elements/backer/10/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/11/avatar)](https://opencollective.com/react-native-elements/backer/11/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/12/avatar)](https://opencollective.com/react-native-elements/backer/12/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/13/avatar)](https://opencollective.com/react-native-elements/backer/13/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/14/avatar)](https://opencollective.com/react-native-elements/backer/14/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/15/avatar)](https://opencollective.com/react-native-elements/backer/15/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/16/avatar)](https://opencollective.com/react-native-elements/backer/16/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/17/avatar)](https://opencollective.com/react-native-elements/backer/17/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/18/avatar)](https://opencollective.com/react-native-elements/backer/18/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/19/avatar)](https://opencollective.com/react-native-elements/backer/19/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/20/avatar)](https://opencollective.com/react-native-elements/backer/20/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/21/avatar)](https://opencollective.com/react-native-elements/backer/21/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/22/avatar)](https://opencollective.com/react-native-elements/backer/22/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/23/avatar)](https://opencollective.com/react-native-elements/backer/23/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/24/avatar)](https://opencollective.com/react-native-elements/backer/24/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/25/avatar)](https://opencollective.com/react-native-elements/backer/25/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/26/avatar)](https://opencollective.com/react-native-elements/backer/26/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/27/avatar)](https://opencollective.com/react-native-elements/backer/27/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/28/avatar)](https://opencollective.com/react-native-elements/backer/28/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/backer/29/avatar)](https://opencollective.com/react-native-elements/backer/29/website)

## Sponsors

Do you use React Native Elements in production? If so, consider supporting this project as it will allow the maintainers to dedicate more time to maintaining this project and also building new features for everyone. Also, your app or company's logo will show [on GitHub](https://github.com/react-native-elements/react-native-elements#sponsors) and link to your website - who doesn't want a little extra exposure? [Here's the info](https://opencollective.com/react-native-elements#sponsor).

[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/0/avatar)](https://opencollective.com/react-native-elements/sponsor/0/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/1/avatar)](https://opencollective.com/react-native-elements/sponsor/1/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/2/avatar)](https://opencollective.com/react-native-elements/sponsor/2/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/3/avatar)](https://opencollective.com/react-native-elements/sponsor/3/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/4/avatar)](https://opencollective.com/react-native-elements/sponsor/4/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/5/avatar)](https://opencollective.com/react-native-elements/sponsor/5/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/6/avatar)](https://opencollective.com/react-native-elements/sponsor/6/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/7/avatar)](https://opencollective.com/react-native-elements/sponsor/7/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/8/avatar)](https://opencollective.com/react-native-elements/sponsor/8/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/9/avatar)](https://opencollective.com/react-native-elements/sponsor/9/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/10/avatar)](https://opencollective.com/react-native-elements/sponsor/10/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/11/avatar)](https://opencollective.com/react-native-elements/sponsor/11/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/12/avatar)](https://opencollective.com/react-native-elements/sponsor/12/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/13/avatar)](https://opencollective.com/react-native-elements/sponsor/13/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/14/avatar)](https://opencollective.com/react-native-elements/sponsor/14/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/15/avatar)](https://opencollective.com/react-native-elements/sponsor/15/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/16/avatar)](https://opencollective.com/react-native-elements/sponsor/16/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/17/avatar)](https://opencollective.com/react-native-elements/sponsor/17/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/18/avatar)](https://opencollective.com/react-native-elements/sponsor/18/website)
[![React Native Elements Backer](https://opencollective.com/react-native-elements/sponsor/19/avatar)](https://opencollective.com/react-native-elements/sponsor/19/website)


