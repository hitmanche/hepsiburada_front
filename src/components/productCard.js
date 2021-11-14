import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, cardList } from "../redux/rdcCard";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cardData = useSelector(cardList);
  const isCard = () => {
    if (
      Array.isArray(cardData) &&
      cardData.find((x) => x.productId === product.productId)
    ) {
      return true;
    }
    return false;
  };

  const addToCard = () => {
    dispatch(addCard(product));
  };
  return (
    <>
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
          <a
            href={"#open-modal" + product.productId}
            className={isCard() && "disabled"}
            onClick={() => {}}
            disabled={isCard()}
          >
            {isCard() ? "Bu ürünü sepete ekleyemezsiniz." : "Sepete Ekle"}
          </a>
        </div>
      </div>
      <div id={"open-modal" + product.productId} class="hb-modal-window">
        <div>
          <div className="hb-modal-header">
            <h1>Ürünü silmek istediğinize emin misiniz ?</h1>
          </div>
          <div className="hb-modal-detail">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentiall....
            <br />
            <br />
            <a href="#" className="error modal-close">
              HAYIR
            </a>
            <a
              href="#"
              className="success modal-close"
              onClick={() => addToCard()}
            >
              EVET
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
