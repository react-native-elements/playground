import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";
import Spinner from "../../containers/Spinner";
import Playground from "./badge.playground.jsx";

const Content = lazy(() => importMDX("../Props/Badge.mdx"));

export default function TilePlayground() {
  return (
    <div>
      <Playground />
      <Suspense fallback={<Spinner />}>
        <PropDrawer>
          <Content />
        </PropDrawer>
      </Suspense>
    </div>
  );
}
