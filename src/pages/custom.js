import React from "react";
import {Carousel, Products, Features, CustomForm} from '.././containers';
import { Feature, Title, Video } from ".././components";
import video1 from '../assets/@Banner 2.mov'
import image1 from '../assets/misc.jpeg'

const Custom = () => {
  return (
    <>
    <Video subheading="Custom Orders" title="Bamboofiy Your Ideas" heading="" text="" button="" myVideo={video1}/>
    {/* <Title subheading="Custom Orders" title="Bamboofiy Your Ideas" heading="" text="" button=""/> */}
    <Feature image = {image1} image_first = {false} subheader = 'Why Bamboo' header = 'Sustainability Never Looked So Good' text = "We're eager to hear about your upcoming project or event and to help make it eco-friendly with our durable, stylish bamboo products. By partnering with us, you'll not only be choosing environmentally-friendly options, but also supporting non-profits dedicated to ocean cleanup and ecosystem restoration. BambooFiy helps create memorable experiences for your guests while promoting a positive message. Let's collaborate to create something uniquely sustainable!" button = ''/>
    <CustomForm/>
    </>
  );
};

export default Custom;
