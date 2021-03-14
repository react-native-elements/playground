import React  ,  { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./tooltip.playground.jsx";
import PropDrawer from "../../components/PropDrawer";


const Content = lazy(() => importMDX("./tooltip.mdx"));
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
