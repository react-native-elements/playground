import React, { lazy, Component, Suspense } from "react";
import Playground from "./avatar.playground.jsx";
import importMDX from "mdx.macro";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./avatar.mdx"));
const App=()=>{
    return (
      <div>
        <Playground />
        <Suspense fallback={<div>Loading...</div>}>
          <PropDrawer>
            <Content />
          </PropDrawer>
        </Suspense>
      </div>
    );
}

export default App;