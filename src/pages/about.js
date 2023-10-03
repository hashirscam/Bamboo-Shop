import React from 'react'
import { Feature, Title, Video } from '.././components'
import video1 from '../assets/about.mov'
import image1 from '../assets/@4.jpeg'
import image2 from '../assets/shirt.JPG'
import image3 from '../assets/food.jpeg'

const About = () => {
  return (
    <>
    <Video subheading="Our Mission" title="Who are we" heading="" text="" button="" myVideo={video1}/>
    <Feature image = {image1} image_first = {false} subheader = 'Eco-conscious Living & Giving' header = 'Sustainable BambooFiy' text = "At BambooFiy, we firmly believe that bamboo holds the key to a substantial, sustainable future as an alternative to plastic. By embracing bamboo, we can proactively combat the detrimental effects of plastic pollution, initiating impactful clean-up and restoration efforts for our beaches, reefs, forests, and more. We are committed to donating a percentage of our annual income to organizations dedicated to effective clean-up and forest restoration. Additionally, all profits from our eco-friendly merchandise will be contributed to organizations that champion the care of our earth." button = ''/>
    <Title subheading="Our Mission" title="" heading="Why We Exist" text="At BambooFiy, we're on a mission to revolutionize the way we consume by promoting the incredible benefits of bamboo. Say goodbye to wasteful plastic and paper products, and join us in embracing the sustainable power of bamboo. With your help, we can spread the word and show the world that bamboo is the ultimate replacement for single-use items." button=""/>
    <Feature image = {image2} image_first = {true} subheader = 'Eco-Innovative Solutions' header = 'Balancing Convenience and Sustainability' text = "BambooFiy is an organization with a small yet dedicated team, working to bring a solution that ensures the replacement is not worse than the original problem. We strive to provide a thoughtful compromise, ensuring you won't have to deal with the inconvenience of subpar alternatives like soggy paper straws" button = ''/>
    <Title subheading="An ideal world" title="" heading="Stay Informed with BambooFiy" text="Interested in staying informed and staying connected with BambooFiy? Subscribe to our complimentary newsletter for a regular dose of the latest environmental stories, news, updates, and much more. Don't forget to explore our social media channels as well, ensuring you never miss out on important updates and exciting developments." button="Be the change" redirect="../shop"/>
    </>
  )
}

export default About