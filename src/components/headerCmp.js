import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchText, setText } from "../redux/rdcSearch";

function HeaderCmp() {
  const sText = useSelector(searchText);
  const dispatch = useDispatch();

  return (
    <>
      <div className="hb-header">
        <div className="hb-header-row hb-row">
          <div className="hb-logo hb-25" />
          <div className="hb-search hb-50">
            <div className="hb-search-input">
              <div className="hb-search-icon" />
              <input
                type="text"
                placeholder="25 milyondan fazla ürün içerisinde ara"
                value={sText}
                onChange={(e) => dispatch(setText(e.target.value))}
              />
            </div>
          </div>
          <div className="hb-cart hb-25">
            <input type="button" value="Sepetim" />
            <span>2</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderCmp;
