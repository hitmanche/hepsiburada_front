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
  useEffect(() => {
    async function asyncFunction() {
      const productData = await GetProducts(
        lsText,
        lsBrand,
        lsColor,
        lsArrangegment,
        lsPagination
      );
      dispatch(loadList(productData.data));
      dispatch(loadFilter(productData.filters));
    }
    asyncFunction();
  }, [dispatch, lsText, lsBrand, lsColor, lsArrangegment, lsPagination]);

  return (
    <>
      <div className="hb-row-wrap">
        {listProduct.map((product, key) => (
          <ProductCard product={product} key={key} />
        ))}
      </div>
      <div className="hb-btn-group">
        <button>&#60;</button>
        {console.log(Math.ceil(listProduct?.length/12))}
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>&#62;</button>
      </div>
    </>
  );
}

export default ProductListCmp;
