import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Relatedprod } from "../../containers";
import { addLineItem, fetchProduct } from "../../utils/api";
import { Feature , Title } from "../";
import image1 from '../../assets/bamboo-feature.png'
import "./singleproduct.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";



const Singleproduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    getProduct();
  }, [id]);

  const handleNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // The notification will vanish after 3 seconds.
  };

  const getProduct = () => {
    fetchProduct(id).then((res) => {
      setProduct(res);
    });
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  if (!product) return;
  return (
    <div className="eco__product">
      <div className="eco__product-description">
        <div className="eco__product-description__image">
          <img src={product.images[0].src} alt="product-img" />
        </div>
        <div className="eco__product-description__info">
          <div className="eco__product-description__social">
            <div className="eco__product-description__social__icons">
              {/* <FaFacebookF size={30} /> */}
              <a href="https://twitter.com/bamboofiy"><FaTwitter size={30} /></a>
              <a href="https://instagram.com/bamboofiy?igshid=NzZlODBkYWE4Ng=="><FaInstagram size={30} /></a>
              <a href="https://www.tiktok.com/@bamboofiy?_t=8g2Qn1LpRak&_r=1"><FaTiktok size={30} /></a>
              {/* <FaPinterest size={30} /> */}
            </div>
          </div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>&#36;{product.variants[0].price.amount}</h2>
          <div className="eco__product-description__buttons">
            <div className="quantity-buttons">
              <span onClick={decrement}>-</span>
              <span>{quantity}</span>
              <span onClick={increment}>+</span>
            </div>
            {showNotification && (
              <div className="notification">
                Item has been added to the cart!
              </div>
            )}
            <div
              className="button"
              onClick={() => {
                addLineItem(product.variants[0].id, quantity);
                handleNotification();
                setQuantity(1);
              }}
            >
              Add to Cart
            </div>
            
          </div>
          <span className="divider"></span>
        </div>
      </div>
      <Title subheading="Our Mission" title="" heading="Why We Exist" text="At BambooFiy, we're on a mission to revolutionize the way we consume by promoting the incredible benefits of bamboo. Say goodbye to wasteful plastic and paper products, and join us in embracing the sustainable power of bamboo. With your help, we can spread the word and show the world that bamboo is the ultimate replacement for single-use items." button=""/>
      <Feature image = {image1} image_first = {false} subheader = 'Why Bamboo' header = 'Your low waste life, made simple.' text = "Bamboo is the superhero of sustainable materials. It's versatile, strong, and grows like crazy! Plus, it's more eco-friendly than many other options out there. We were surprised that bamboo hasn't been fully embraced yet, but that's where you come in. Together, we can unleash the true potential of this sustainable super plant and make a real difference." button = ''/>
      <div className="eco__product-related__products">
        <Relatedprod productId={id} />
      </div>
    </div>
  );
};

export default Singleproduct;
