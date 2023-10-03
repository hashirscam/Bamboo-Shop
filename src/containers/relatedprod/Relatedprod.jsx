import { Products } from "../";
import React, { useEffect , useState } from "react";
import { fetchProducts } from "../../utils/api";


const Relatedprod = ({productId}) => {
  const [related, setRelated] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const removeProduct = (id) => {
    const newProducts = related.filter((product) => product.id !== 'gid://shopify/Product/'+id);
    return newProducts;
  };

  const getProducts =  () => {
    fetchProducts().then((products) => {
      setRelated(products);
    });
  };

  if (!related) return;
  return (
    <div className="related-products">
        <Products headingText= "Related Products" products={removeProduct(productId)} />
    </div>
  )
}

export default Relatedprod