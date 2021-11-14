import React from "react";

function ProductCard({ product }) {
  return (
    <div className="hb-product-card">
      <img alt="iphone" src={product?.image} />
      <div className="hb-detail">
        <p className="hb-p p-12">{product?.title}</p>
      </div>
      <div className="hb-detail none">
        <p className="hb-p bold p-12">Marka : </p>
        <p className="hb-p p-12">{product?.brand}</p>
        <br />
        <p className="hb-p bold p-12">Renk : </p>
        <p className="hb-p p-12">{product?.color}</p>
      </div>
      <div className="hb-detail none">
        <p className="hb-h1 black p-14">
          {product?.price -
            product?.price * (product?.percent / 100) +
            +" " +
            product?.currency}
        </p>
        <p className="hb-p p-13 hb-line-through">
          {product?.price + " " + product?.currency}
        </p>
        &nbsp;
        <p className="hb-p p-12 hb-percent">{product?.percent + "%"}</p>
      </div>
      <div className="hb-add-cart">
        <button type="button" onClick={() => alert("test")} disabled>
          Bu ürünü sepete ekleyemezsiniz.
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
