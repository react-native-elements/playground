import React, { lazy, Suspense } from "react";
import Playground from "./searchbar.playground.jsx";
import { importMDX } from "mdx.macro";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./airbnb.mdx"));

export default function AirbnbPlayground() {
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
