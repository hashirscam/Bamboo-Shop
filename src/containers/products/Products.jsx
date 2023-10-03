import React from "react";
import Product from "../../components/product/Product";
import { Link, useLocation } from 'react-router-dom'
import "./products.css";

const Products = ({ products, headingText }) => {
  const location = useLocation();
  return (
    <div className="eco__products section__padding">
      <h1 className="eco__products-heading">{headingText}</h1>
      { location.pathname === '/shop' &&
        <div className="eco__products-container">
        {products?.map((item) => (
          <Product
            key={item.id.replace("gid://shopify/Product/", "")}
            id={item.id.replace("gid://shopify/Product/", "")}
            data={item}
          />
        ))}
        </div>
      }
      { location.pathname != '/shop' &&
      <div className="eco__products-container">
        {products?.slice(0, 2).map((item) => (
          <Product
            key={item.id.replace("gid://shopify/Product/", "")}
            id={item.id.replace("gid://shopify/Product/", "")}
            data={item}
          />
        ))}
        <div className="eco__desktop">
          {products?.slice(2, 3).map((item) => (
            <Product
              key={item.id.replace("gid://shopify/Product/", "")}
              id={item.id.replace("gid://shopify/Product/", "")}
              data={item}
            />
          ))}
        </div>
        {products?.length > 3 && (
          <div className="eco__desktop">
            {products?.slice(3, 4).map((item) => (
              <Product
                key={item.id.replace("gid://shopify/Product/", "")}
                id={item.id.replace("gid://shopify/Product/", "")}
                data={item}
              />
            ))}
          </div>
        )}
        <Link to='shop' className="eco__mobile button">Shop More</Link>
      </div>}
    </div>
  );
};

export default Products;
