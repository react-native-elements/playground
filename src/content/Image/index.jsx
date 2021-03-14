import React ,  { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./icon.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

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
