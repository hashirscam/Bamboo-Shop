import React from 'react'
import { Feature, Title, Video } from '../components'
import video from '../assets/deforest1.mov'
import image1 from '../assets/deforestationn.jpeg'
import image2 from '../assets/@NEW.png'
import image3 from '../assets/food.jpeg'

const Deforest = () => {
  return (
    <>
      <Video subheading="Deforestation" title="Trees Do Breathe" heading="" text="" button="" myVideo={video}/>
      <Feature image = {image1} image_first = {false} subheader = 'Why Forests' header = "Putting Paper Consumption into Perspective"
      text = "Were you aware that a single tree can produce around 8,500 sheets of paper? And that's not even taking into account specialty papers, like those used in certain magazines, which can consume nearly 15 and a half trees for just one issue, as per Google. You might initially consider 8,500 sheets per tree to be a substantial amount of paper. However, when you contemplate the sheer volume of paper used in our daily global activities around the clock, it quickly becomes evident that this number isn't as substantial as it may seem." button = ''/>
      <Title subheading="Thinking Ahead" title="" heading="Protecting Trees for a Sustainable Future" text="Trees are essential for countless reasons. They produce oxygen, absorb carbon dioxide, provide habitat for wildlife, and help regulate the climate. They prevent soil erosion, purify water, and offer shade and beauty to our environments. Trees are a vital part of Earth's delicate balance, sustaining life and enhancing our well-being." button=""/>
      <Feature image = {image2} image_first = {true} subheader = 'Turn The Tide' header = "It's Not Too Late" text = "Over 41 million trees are cut daily, which equates to approximately 80,000 acres of tropical rainforests per day. This alarming rate is worsened by the growing use of single-use paper products. However, it's not too late. We firmly believe that bamboo can serve as a solution to reduce the demand for tree genocide and be the soultion in restoring affected areas." button = ''/>
      <Title subheading="An ideal world" title="" heading="A thriving ecosystem" text="Imagine a world where every patch of forest is protected, every tree is valued, and every human activity is sustainable. It's not just a dream; it can become a reality with your support. By advocating for sustainable practices, you become a part of the solution against deforestation, promoting cleaner air, reduced greenhouse gas emissions, and healthier ecosystems." button="Be The Change" redirect="../order"/>
    </>
  )
}

export default Deforest