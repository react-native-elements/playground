import React  ,  { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./tooltip.playground.jsx";
import PropDrawer from "../../components/PropDrawer";


const Content = lazy(() => importMDX("./text.mdx"));
export default function TextPlayground() {
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
