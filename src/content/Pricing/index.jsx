import React  ,  { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";


import Playground from "./pricing.playground.jsx";
import PropDrawer from "../../components/PropDrawer";


const Content = lazy(() => importMDX("./pricing.mdx"));
export default function PricingPlayground() {
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
