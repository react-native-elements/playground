import React, { lazy, Suspense } from "react";
import Playground from "./bottomsheet.playground.jsx";
import { importMDX } from "mdx.macro";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./bottomsheet.mdx"));

export default function BottomSheetPlayground() {
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
