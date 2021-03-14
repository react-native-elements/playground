import React , { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./header.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./header.mdx"));
export default function HeaderPlayground() {
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
