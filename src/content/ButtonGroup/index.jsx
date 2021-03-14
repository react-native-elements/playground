import React, { lazy, Suspense } from "react";
import Playground from "./buttongroup.playground.jsx";
import { importMDX } from "mdx.macro";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./buttongroup.mdx"));

export default function ButtonGroupPlayground() {
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
