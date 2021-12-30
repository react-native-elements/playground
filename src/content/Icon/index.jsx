import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";
import Spinner from "../../containers/Spinner";
import Playground from "./icon.playground.jsx";

const Content = lazy(() => importMDX("../Props/Icon.mdx"));

export default function IconPlayground() {
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
