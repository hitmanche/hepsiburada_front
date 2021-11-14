import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productFilter } from "../redux/rdcProduct";
import {
  searchArrangement,
  searchText,
  setArrangement,
} from "../redux/rdcSearch";

function SubHeaderCmp() {
  const dispatch = useDispatch();

  const sText = useSelector(searchText);
  const lsArrangegment = useSelector(searchArrangement);
  const pFilter = useSelector(productFilter);

  return (
    <div className="hb-row">
      <div className="hb-50">
        <h1 className="hb-h1">Cep Telefonları</h1>
        <p className="hb-p grey">Aranan Kelime : </p>
        <p className="hb-p">{sText}</p>
      </div>
      <div className="hb-50 hb-select">
        <select
          name="arrangement"
          id="arrangement"
          onChange={(e) => dispatch(setArrangement(e.target.value))}
        >
          <option value="" disabled>
            Sıralama
          </option>
          {pFilter?.arrangement?.map((arr, key) => (
            <option
              key={key}
              selected={arr.id === lsArrangegment}
              value={arr.id}
            >
              {arr.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SubHeaderCmp;
