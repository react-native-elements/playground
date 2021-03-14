import React  , { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import Playground from "./bottomsheet.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./bottomsheet.md"));
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
