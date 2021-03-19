import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";
import Playground from "./tooltip.playground.jsx";
const Content = lazy(() => importMDX("../Props/tooltip.md"));

export default function ToolTipPlayground() {
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
