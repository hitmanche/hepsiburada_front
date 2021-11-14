import React from "react";
import { useSelector } from "react-redux";
import { productFilter } from "../redux/rdcProduct";
import SidebarItem from "./sidebarItem";

function SidebarCmp() {
  const pFilter = useSelector(productFilter);
  return (
    <div className="hb-sidebar">
      {Object.keys(pFilter).map((key, ind) => (
        <SidebarItem key={ind} filter={pFilter[key]} id={key} />
      ))}
    </div>
  );
}

export default SidebarCmp;
