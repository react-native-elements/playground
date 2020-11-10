import React from "react";
import Lottie from "react-lottie";
import animationData from "./animation.json";

export default function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie style={{ width: "100%" }} options={defaultOptions} />;
}
