import React ,  { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./listitem.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./listitem.mdx"));
export default function ListItemPlayground() {
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
