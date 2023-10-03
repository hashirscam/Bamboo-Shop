import React from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Cartitem } from "../";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/context";
import { fetchCheckout } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = ({ setShowCart }) => {
  const navigate = useNavigate();
  const { cartRender, setCartRender } = useContext(Context);
  const [webUrl, setWebUrl] = useState("");
  const [emptyCart, setEmptyCart] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    fetchCheckout().then((res) => {
      setSubTotal(res.lineItemsSubtotalPrice.amount);
      setCartProducts(res.lineItems);
      setEmptyCart(res.lineItems.length);
      setCartRender(false);
      setWebUrl(res.webUrl);
    });
  }, [cartRender]);

  const handleCheckout = () => {
    window.open(webUrl, "_blank");
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="cart-text">Close</span>
          </span>
        </div>
        {!Boolean(emptyCart) && (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <div
              className="return-cta button"
              onClick={() => {
                setShowCart(false);
                navigate("/shop");
              }}
            >
              CONTINUE SHOPPING
            </div>
          </div>
        )}

        {Boolean(emptyCart) && (
          <>
            <Cartitem products={cartProducts} />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal :</span>
                <span className="text total">&#36;{subTotal}</span>
              </div>
              <div className="button-checkout-cta" onClick={handleCheckout}>
                CHECKOUT
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
