import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/productCard";
import { loadFilter, loadList, productList } from "../redux/rdcProduct";
import {
  pagination,
  searchArrangement,
  searchBrand,
  searchColor,
  searchText,
  setPage,
} from "../redux/rdcSearch";
import { GetProducts } from "../services";

function ProductListCmp() {
  const dispatch = useDispatch();

  const listProduct = useSelector(productList);
  const lsText = useSelector(searchText);
  const lsBrand = useSelector(searchBrand);
  const lsColor = useSelector(searchColor);
  const lsArrangegment = useSelector(searchArrangement);

  const lsPagination = useSelector(pagination);
  const setPagination = (num) => {
    if (num > Math.ceil(listProduct?.length / 12)) {
      num = Math.ceil(listProduct?.length / 12);
    }
    if (num < 1) {
      num = 1;
    }
    dispatch(setPage(num));
  };

  useEffect(() => {
    async function asyncFunction() {
      setPagination(1);
      const productData = await GetProducts(
        lsText,
        lsBrand,
        lsColor,
        lsArrangegment
      );
      dispatch(loadList(productData.data));
      dispatch(loadFilter(productData.filters));
    }
    asyncFunction();
  }, [dispatch, lsText, lsBrand, lsColor, lsArrangegment]);

  const createButtons = () => {
    let returnButtons = [];
    for (var i = 1; i <= Math.ceil(listProduct?.length / 12); i++) {
      returnButtons.push(
        <button key={i} id={i} onClick={(e) => setPagination(e.target.id)}>
          {i}
        </button>
      );
    }
    return returnButtons;
  };

  return (
    <>
      {console.log(lsPagination)}
      <div className="hb-row-wrap">
        {listProduct
          .slice((lsPagination - 1) * 12, lsPagination * 12)
          .map((product, key) => (
            <ProductCard product={product} key={key} />
          ))}
      </div>
      <div className="hb-btn-group">
        <button onClick={() => setPagination(lsPagination - 1)}>&#60;</button>
        {createButtons()}
        <button onClick={() => setPagination(lsPagination + 1)}>&#62;</button>
      </div>
    </>
  );
}

export default ProductListCmp;
