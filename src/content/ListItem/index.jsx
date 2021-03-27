import React, { lazy } from "react";
import { importMDX } from "mdx.macro";

import Playground from "./listitem.playground.jsx";

const Content = lazy(() => importMDX("../Props/listitem.md"));

export default function ListItemPlayground() {
  return (
    <div>
      <Playground />
    </div>
  );
}
