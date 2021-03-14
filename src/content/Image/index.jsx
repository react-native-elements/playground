import React ,  { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./input.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./image.mdx"));
export default function ImagePlayground() {
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
