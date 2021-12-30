import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";
import Playground from "./listitem.playground.jsx";
import Spinner from "../../containers/Spinner";

const Content = lazy(() => importMDX("../Props/Listitem.md"));

export default function ListItemPlayground() {
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
