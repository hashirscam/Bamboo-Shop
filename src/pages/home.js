import { useEffect, useContext } from "react";
import { Carousel, Products, Features } from ".././containers";
import { Feature, Video } from ".././components";
import video from '../assets/smoothie.mov'
import images from "../assets/images.js";
import { fetchProducts } from ".././utils/api";
import { Context } from "../utils/context";
import image4 from '../assets/@3.jpeg'
import image2 from '../assets/micro plastics spoon.jpeg'
import image3 from '../assets/@2.jpeg'
import image1 from '../assets/@1.jpeg'

const Home = () => {
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
      <Video subheading="Your Partner in Lifestyle Detoxification" title="BambooFiy Your Life" heading="" text="" button="" myVideo={video}/>
      <Feature image = {image1} image_first = {true} subheader = 'BE THE CHANGE' header = 'Everyday Necessities, Now Crafted Sustainably' text = 'Thoughtfully made essentials to live your best life. Take your trash out less and keep more in your wallet. Every order plants a tree!' button = 'SHOW TOP SWAPS' link='shop'/>
      <Feature image = {image2} image_first = {false} subheader = 'Microplastics' header = 'The Invisible Threat' text = "Microplastics are tiny plastic particles that pose significant harm to marine ecosystems. They can also contaminate soil, affecting plant growth and soil health. While the full extent of these impacts on human health is still being researched, ingestion of microplastics may lead to inflammation, damage to internal organs, and potential exposure to harmful chemicals." button = 'Read More' link='plastic'/>
      <Products products={products} headingText={"Popular Products"} />
      <Feature image = {image3} image_first = {true} subheader = 'Embrace Bamboo Innovation' header = 'Driving Change for Cleaner, Greener Living' text = "BambooFiy is committed to making a significant difference by transitioning from single-use plastics to bamboo. Our mission is to replace all single-use plastics with bamboo, as we are convinced that this change will enhance the effectiveness of plastic cleanup initiatives, ultimately contributing to cleaner beaches, oceans and so much more" button = 'Read More' link='zero-waste'/>
      <Feature image = {image4} image_first = {false} subheader = "Elevate Eco-Awareness" header = "Addressing Deforestation with Bamboo Solutions" text = "Did you know that by substituting single-use plastics with bamboo, we're not just addressing the plastic problem, but also making strides in combating two other critical issues our planet faces? This includes the landfill dilemma, which releases harmful toxins into the ground, and the deforestation crisis." button = 'Read More' link='zero-waste'/>

      {/* <Carousel/> */}
    </>
  );
};

export default Home;
