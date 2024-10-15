import React from "react";
import { Feature, Title, Video } from "../components";
import video from "../assets/future.mov";
import image1 from "../assets/@7.jpeg";
import image2 from "../assets/straws.jpeg";
import image3 from "../assets/items.jpeg";

const Zerowaste = () => {
    return (
        <>
            <Video
                subheading="Our Vision"
                title="Zero Waste Movement"
                heading=""
                text=""
                button=""
                myVideo={video}
            />
            <Feature
                image={image1}
                image_first={false}
                subheader="Our Roots"
                header="Welcome To The Revolution"
                text="Our story began on a paradise Caribbean island, where we witnessed the magic of a plastic-free environment. That's the dream that drives BambooFiy every single day. At BambooFiy, we're more than just a brand; we're a force for positive change. With every purchase you make, we allocate a percentage of our profits to support crucial clean-up projects on beaches and oceans affected by plastic pollution. So, come join us on this thrilling green adventure. Let's bamboofy our lives, make a stand for Mother Earth, and leave a greener legacy for generations to come."
                button=""
            />
            <Title
                subheading="The Journey"
                title=""
                heading="Embrace the Zero Waste Mindset"
                text="Zero waste is a lifestyle that aims to minimize the amount of garbage we create. It's a journey guided by principles that inspire us to adopt responsible habits and make positive changes in our lives. By consciously reducing our waste and making sustainable choices, we contribute to creating a more harmonious coexistence with nature. So, let's embark on this adventure together, aiming for a lifestyle that treads lightly on the planet and celebrates the beauty of our interconnectedness with the environment."
                button=""
            />
            <Feature
                image={image2}
                image_first={true}
                subheader="JOIN THE MOVEMENT"
                header="The Bamboo Revolution."
                text="At BambooFiy, we promote the incredible benefits of bamboo. Say goodbye to wasteful plastic and paper products, and join us in embracing the sustainable power of bamboo. Every decision we make towards sustainability has a real impact on our collective journey towards a greener future."
                button=""
            />
            <Title
                subheading="Our Pledge"
                title=""
                heading="Empowering Green Initiatives with BambooFiy"
                text="BambooFiy commits to donating a percentage of its earnings to environmentally conscious organizations. We're also gearing up to do more in the near future – all profits from our clothing line will be channeled into initiatives to restore forests and replant trees in deforestation-affected regions"
                button=""
            />
            <Feature
                image={image3}
                image_first={false}
                subheader="Bamboo Future"
                header="Sustainability, The New Normal"
                text="Our planet's harmony hinges on everything working together. Each of us plays a role in shaping our environment. At BambooFiy, we believe it's time to tackle consumerism and make a change. We've created a bamboo movement that's taking the consumer market by storm, and we want you to be a part of it. Together, we can create a brighter future for all. "
                button=""
            />
            <Title
                subheading="Time To Cleanse"
                title=""
                heading="Repair Mission With Bamboo"
                text="At BambooFiy, we're on a mission to revolutionize the way we consume by promoting the incredible benefits of bamboo. By choosing bamboo products, you become an advocate for cleaner oceans, reduced plastic pollution, and healthier ecosystems. Let's spread the message far and wide that bamboo is the key to solving our plastic and paper waste crisis. Join the movement and be part of the change."
                button="Join the revolution"
                redirect="../order"
            />
        </>
    );
};

export default Zerowaste;
