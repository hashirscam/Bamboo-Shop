import React from "react";
import { useNavigate } from "react-router-dom";
import "./product.css";
// import { useContext } from "react";
// import { Context } from "../../utils/context";

const Product = ({ id , data }) => {
  const navigate = useNavigate();
  // const { handleAddToCart } = useContext(Context);
  return (
    <div className="eco__product" onClick={ () => navigate("/product/" + id ) }>
      <div className="eco__product-img">
        <img src={data.images[0].src} alt="product-img" />
        {/* <div className="product__sale-sticker">SALE</div> */}
      </div>
      <div className="eco__product-content">
        <p className="eco__product-subheader">Eco-Friendly</p>
        <h1 className="eco__product-header">{data.title}</h1>
        <p className="eco__product-reviews">Made With Care!</p>
        <h2 className="eco__product-price">&#36;{data.variants[0].price.amount}</h2>
        <div className="button">
          VIEW PRODUCT
        </div>
      </div>
    </div>
  );
};

export default Product;
