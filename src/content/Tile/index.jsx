import React  ,  { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import Playground from "./tile.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./title.mdx"));
export default function TilePlayground() {
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
};
