import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";
import Spinner from "../../containers/Spinner";
import Playground from "./buttongroup.playground.jsx";

const Content = lazy(() => importMDX("../Props/Button_group.md"));

export default function ButtonGroupPlayground() {
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
