import React  ,  { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./searchbar.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./searchbar.mdx"));
export default function SearchBarPlayground() {
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
