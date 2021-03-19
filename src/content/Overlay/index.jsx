import React, { lazy, Suspense } from "react";
import Playground from "./overlay.playground.jsx";
import { importMDX } from "mdx.macro";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("../Props/overlay.md"));

export default function OverlayPlayground() {
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
