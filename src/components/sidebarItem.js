import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchArrangement,
  searchBrand,
  searchColor,
  setArrangement,
  setBrand,
  setColor,
} from "../redux/rdcSearch";

function SidebarItem({ filter, id }) {
  const dispatch = useDispatch();
  const lsBrand = useSelector(searchBrand);
  const lsColor = useSelector(searchColor);
  const lsArrangegment = useSelector(searchArrangement);

  const titles = [
    { id: "brand", value: "Marka" },
    { id: "color", value: "Renk" },
    { id: "arrangement", value: "Sırala" },
  ];
  const BrandTitle = (id) => titles.find((x) => x.id === id)?.value;

  const setFilter = (value) => {
    switch (id) {
      case "brand":
        dispatch(setBrand(value));
        break;
      case "color":
        dispatch(setColor(value));
        break;
      case "arrangement":
        dispatch(setArrangement(value));
        break;
      default:
        break;
    }
  };

  const selectedItem = (value) => {
    if (id === "brand" && lsBrand === value) {
      return "selected";
    }
    if (id === "color" && lsColor === value) {
      return "selected";
    }
    if (id === "arrangement" && lsArrangegment === value) {
      return "selected";
    }
    return "";
  };
  return (
    <div className="hb-sidebar-item">
      <p>{BrandTitle(id)}</p>
      <ul>
        {filter?.map((f, key) => (
          <li
            className={selectedItem(f.id)}
            key={key}
            onClick={() => setFilter(f.id)}
          >
            {f.value}
            {f.count && " (" + f.count + ")"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarItem;
