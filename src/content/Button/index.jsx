import React, { lazy, Component, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";
import Spinner from "../../containers/Spinner";
import Playground from "./button.playground.jsx";

const Content = lazy(() => importMDX("../Props/Button.mdx"));

class App extends Component {
  render() {
    return (
      <div>
        <Playground />
        <Suspense fallback={<Spinner />}>
          <PropDrawer>
            <Content />
          </PropDrawer>
        </Suspense>
      </div>
    );
  }
}
export default App;
