import React, { lazy, Component, Suspense } from "react";
import importMDX from "mdx.macro";

import Playground from "./button.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./button.mdx"));
class App extends Component {
  render() {
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
}
export default App;
