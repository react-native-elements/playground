import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Root from "./containers";
import "./App.css";
function App() {
  return (
    <SafeAreaProvider>
      
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
        }

        @font-face {
          font-family: 'FontAwesome';
          src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
        }
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf")}) format('truetype');
        }
      `}</style>
      <Root />
    </SafeAreaProvider>
  );
}

export default App;
