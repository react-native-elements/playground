import React , { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./divider.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./divider.mdx"));
export default function DividerPlayground() {
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
