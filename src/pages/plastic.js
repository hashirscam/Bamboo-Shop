import React from 'react'
import { Feature, Title, Video } from '../components'
import video1 from '../assets/plastic.mov'
import image1 from '../assets/bottle.jpeg'
import image2 from '../assets/@6.jpeg'
import image3 from '../assets/micro_plastics.jpeg'

const Plastic = () => {
  return (
    <>
    <Video subheading="The Plastic Problem" title="The Ocean's Unwanted Guest" heading="" text="" button="" myVideo={video1}/>
    <Feature image = {image1} image_first = {false} subheader = 'It Affects Us ALl' header = 'A Plastic Problem Beyond Politics' text = "Undoubtedly, regardless of one's political stance, the global plastic issue is undeniable. The increase use of plastic in our daily lives has led to a substantial problem more so crisis.To give an idea of how bad it has become there is a plastic-filled garbage patch in the Pacific Ocean, surpassing the size of Texas current day. This is concerning for many reasons." button = ''/>
    <Title subheading="The Plastic Crisis" title="" heading="The Great Pacific Garbage Patch" text="The Great Pacific Garbage Patch is a colossal floating mass of plastic debris in the North Pacific Ocean. However, plastic pollution is a global issue, with other smaller garbage patches in different oceanic regions. This plastic influx harms marine life and disrupts the balance of oceanic ecosystems. By adopting responsible consumption habits, supporting legislation to reduce single-use plastics, and participating in beach clean-ups and recycling efforts, we can make a positive impact." button=""/>
    <Feature image = {image2} image_first = {true} subheader = 'JOIN THE MOVEMENT' header = 'The Eco Switch' text = 'Switching to bamboo products instead of single-use plastics can significantly reduce plastic pollution in the ocean. Bamboo is a renewable, biodegradable material that offers several environmental benefits. By opting for bamboo products, we can reduce the amount of plastic waste generated, promote a more sustainable and circular economy, and contribute to protecting the health of our oceans.' button = ''/>
    <Title subheading="Join the Bamboo Revolution" title="" heading="The Sustainable Solution" text="By raising awareness about the incredible attributes of bamboo, we aim to revolutionize our consumption habits. Our objective is to inspire an increasing number of restaurants, businesses, hotels, and others to join the bamboo movement. Bamboo stands unrivaled in sustainability among all alternatives, making it the top choice." button=""/>
    <Feature image = {image3} image_first = {false} subheader = "The Invisible Threat" header = 'Combatting The Microplastic Menace' text = "Microplastics, those itty-bitty plastic bits, wreak havoc onmarine life and soil health. They're like unwanted guests atan ecological party, causing inflammation, harming organs,and exposing us to nasty chemicals. Though the full extentof their impact on humans is under study, it's clear we needto kick these harmful microplastics out!" button = ''/>
    <Title subheading="Together We Can" title="" heading="Transforming Consumption" text="At BambooFiy, we're on a mission to revolutionize the way we consume by promoting the incredible benefits of bamboo. Say goodbye to wasteful plastic and paper products, and join us in embracing the sustainable power of bamboo. Together, we can spread the word and show the world that bamboo is the ultimate replacement for single-use items." button="Join the revolution" redirect="../order"/>
    </>
  )
}

export default Plastic