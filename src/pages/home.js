import { useEffect, useContext } from "react";
import { Products } from ".././containers";
import { Feature, Video } from ".././components";
import video from "../assets/smoothie.mov";
import { fetchProducts } from ".././utils/api";
import { Context } from "../utils/context";
import image4 from "../assets/@3.jpeg";
import image2 from "../assets/micro plastics spoon.jpeg";
import image3 from "../assets/@2.jpeg";
import image1 from "../assets/@1.jpeg";
import image5 from "../assets/q1.jpg";
import image6 from "../assets/bam.jpg";
import image7 from "../assets/boba.jpg";

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
            <Video
                subheading="Your Partner in Lifestyle Detoxification"
                title="BambooFiy Your Life"
                heading=""
                text=""
                button=""
                myVideo={video}
            />
            <Products products={products} headingText={"Order Your Samples"} />
            <Feature
                image={image5}
                image_first={true}
                subheader="MAKE THE SWITCH"
                header="Sip Sustainably with Bamboo Straws"
                text="Imagine a world where every sip you take helps clean the planet. Our bamboo straws are an eco-friendly alternative to plastic, reducing pollution. By choosing bamboo straws, you cut down plastic waste and support renewable resources. Make a positive impact with every sip."
                button=""
            />
            <Feature
                image={image6}
                image_first={false}
                subheader="ECO-FRIENDLY CHOICES"
                header="Dine Responsibly with Bamboo Cutlery"
                text="Make every meal an eco-friendly experience with our bamboo cutlery. By choosing bamboo, you help reduce plastic waste and support renewable resources. Our durable and biodegradable cutlery is perfect for any occasion, ensuring you dine sustainably every time."
                button=""
            />
            <Feature
                image={image7}
                image_first={true}
                subheader="NATURAL ALTERNATIVES"
                header="Choose Bamboo Over Plastic"
                text="Imagine a world where single-use plastic is a thing of the past, where every meal you enjoy is complemented by eco-friendly bamboo utensils. It’s not just a dream; it can become a reality with your support. By choosing bamboo products, you reduce plastic waste, promote sustainable farming, and support a healthier planet. Join us in making a difference, one bamboo straw at a time."
                button=""
            />
            <Feature
                image={image1}
                image_first={false}
                subheader="BE THE CHANGE"
                header="Everyday Necessities, Now Crafted Sustainably"
                text="Thoughtfully made essentials to live your best life. Take your trash out less and keep more in your wallet. Every order plants a tree!"
                button="SHOW TOP SWAPS"
                link="shop"
            />
            <Feature
                image={image2}
                image_first={true}
                subheader="Microplastics"
                header="The Invisible Threat"
                text="Microplastics are tiny plastic particles that pose significant harm to marine ecosystems. They can also contaminate soil, affecting plant growth and soil health. While the full extent of these impacts on human health is still being researched, ingestion of microplastics may lead to inflammation, damage to internal organs, and potential exposure to harmful chemicals."
                button="Read More"
                link="plastic"
            />
            <Feature
                image={image3}
                image_first={false}
                subheader="Embrace Bamboo Innovation"
                header="Driving Change for Cleaner, Greener Living"
                text="BambooFiy is committed to making a significant difference by transitioning from single-use plastics to bamboo. Our mission is to replace all single-use plastics with bamboo, as we are convinced that this change will enhance the effectiveness of plastic cleanup initiatives, ultimately contributing to cleaner beaches, oceans and so much more"
                button="Read More"
                link="zero-waste"
            />
            <Feature
                image={image4}
                image_first={true}
                subheader="Elevate Eco-Awareness"
                header="Addressing Deforestation with Bamboo Solutions"
                text="Did you know that by substituting single-use plastics with bamboo, we're not just addressing the plastic problem, but also making strides in combating two other critical issues our planet faces? This includes the landfill dilemma, which releases harmful toxins into the ground, and the deforestation crisis."
                button="Read More"
                link="deforest"
            />
        </>
    );
};

export default Home;
