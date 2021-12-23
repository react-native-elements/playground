import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";
import Spinner from "../../containers/Spinner";
import Playground from "./checkbox.playground.jsx";

const Content = lazy(() => importMDX("../Props/checkbox.md"));

export default function CheckBoxPlayground() {
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
