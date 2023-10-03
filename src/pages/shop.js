import { useEffect, useContext } from "react";
import { Products } from ".././containers";
import { fetchProducts } from ".././utils/api";
import { Context } from "../utils/context";
import video1 from '../assets/@Banner 2.mov'
import image2 from '../assets/misc.jpeg'
import { Feature, Title, Video } from ".././components";

const Shop = () => {
  const { products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetchProducts().then((res) => {
      setProducts(res);
    });
  };

  return (
    <>
      <Video subheading="Custom Orders" title="Bamboofiy Your Ideas" heading="" text="" button="" myVideo={video1}/>
      <Products products={products} headingText={"Popular Products"} />
      <Feature image = {image2} image_first = {true} subheader = 'Turn The Tide' header = "It's Not Too Late" text = "Over 41 million trees are cut daily, which equates to approximately 80,000 acres of tropical rainforests per day. This alarming rate is worsened by the growing use of single-use paper products. However, it's not too late. We firmly believe that bamboo can serve as a solution to reduce the demand for tree genocide and be the soultion in restoring affected areas." button = ''/>
      <Title subheading="An ideal world" title="" heading="A thriving ecosystem" text="Imagine a world where every patch of forest is protected, every tree is valued, and every human activity is sustainable. It's not just a dream; it can become a reality with your support. By advocating for sustainable practices, you become a part of the solution against deforestation, promoting cleaner air, reduced greenhouse gas emissions, and healthier ecosystems." button="Be The Change" redirect="../order"/>
    </>
  );
};

export default Shop;
