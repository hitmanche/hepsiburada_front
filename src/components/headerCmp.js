import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardList, loadCard } from "../redux/rdcCard";
import { searchText, setText } from "../redux/rdcSearch";

function HeaderCmp() {
  const sText = useSelector(searchText);
  const cardData = useSelector(cardList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadCard(
        localStorage.getItem("card-data")
          ? JSON.parse(localStorage.getItem("card-data"))
          : []
      )
    );
  }, []);
  useEffect(() => {
    localStorage.setItem("card-data", JSON.stringify(cardData));
  }, [cardData]);

  return (
    <React.StrictMode>
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
            <span>{cardData?.length}</span>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default HeaderCmp;
