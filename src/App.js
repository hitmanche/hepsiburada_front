import React from "react";
import "./App.scss";
import HeaderCmp from "./components/headerCmp";
import ProductListCmp from "./components/productListCmp";
import SidebarCmp from "./components/sidebarCmp";
import SubHeaderCmp from "./components/subHeaderCmp";

function App() {
  return (
    <div>
      <HeaderCmp />
      <div className="hb-content">
        <SubHeaderCmp />
        <div className="hb-row">
          <div className="hb-20">
            <SidebarCmp />
          </div>
          <div className="hb-80">
            <ProductListCmp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
