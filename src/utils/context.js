import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { updateLineItem } from "./api";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [emptyCart, setEmptyCart] = useState(true);
  const [cartRender, setCartRender] = useState(false); 
  const [client, setClient] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }
  , [location]);

  useEffect(() => {
    let subTotal = 0;
    cartItems.map((item) => {
      subTotal += item.attributes.price * item.attributes.quantity;
    }
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex(p => p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [ ...items, product ];
    }
    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, productId, quantity) => {
    if (type === "inc") {
      updateLineItem(productId, quantity);
      setCartRender(!cartRender);
    } else if (type === "dec" && quantity > 1) {
      updateLineItem(productId, quantity);
      setCartRender(!cartRender);
    }
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cartRender,
        setCartRender,
        emptyCart,
        setEmptyCart,
        client,
        setClient,
        checkout,
        setCheckout,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
