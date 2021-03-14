import React , { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";

import Playground from "./card.playground.jsx";
import PropDrawer from "../../components/PropDrawer";


const Content = lazy(() => importMDX("./card.mdx"));
export default function CardPlayground() {
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
