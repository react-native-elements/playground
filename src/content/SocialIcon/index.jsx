import React  ,  { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./socialicon.playground.jsx";
import PropDrawer from "../../components/PropDrawer";

const Content = lazy(() => importMDX("./socialcon.mdx"));
export default function SocialIconPlayground() {
  return (
    <div>
      <Playground />
      <Suspense>
      <PropDrawer>
          <Content />
        </PropDrawer>
      </Suspense>
    </div>
  );
}
