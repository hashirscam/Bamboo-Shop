import { MdClose } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../utils/api";
import "./search.css";

const Search = ({ setShowSearch }) => {
  let data;
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts =  () => {
    fetchProducts().then((products) => {
      setProducts(products);
    });
  };

  const filterProducts = (query, products) => {
    let newProducts = products.filter((product) => (
      product.title.toLowerCase().includes(query.toLowerCase())
    ));
    console.log(newProducts)
    return newProducts;
  };
  
  if (!query.length) {
    data = null;
  } else {
  data = filterProducts(query, products);
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {data?.map((item) => (
            <div key={item.id} className="search-result-item" onClick={() => {
              navigate(`/product/${item.id.replace('gid://shopify/Product/', '')}`)
              setShowSearch(false)
            }} >
              <div className="img-container">
                <img
                  src={
                    item.images[0].src
                  }
                  alt="product"
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="desc">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
