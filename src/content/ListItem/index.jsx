import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import PropDrawer from "../../components/PropDrawer";

import Playground from "./listitem.playground.jsx";

const Content = lazy(() => importMDX("../Props/listitem.md"));

export default function ListItemPlayground() {
  return (
    <div>
      <Playground />
    </div>
  );
}
