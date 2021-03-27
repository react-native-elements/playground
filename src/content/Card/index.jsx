import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";
import Spinner from "../../containers/Spinner";
import Playground from "./card.playground.jsx";

const Content = lazy(() => importMDX("../Props/card.md"));

export default function CardPlayground() {
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
