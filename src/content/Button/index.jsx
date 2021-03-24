import React, { lazy, Component, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";
import Playground from "./button.playground.jsx";

const Content = lazy(() => importMDX("../Props/button.md"));
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
