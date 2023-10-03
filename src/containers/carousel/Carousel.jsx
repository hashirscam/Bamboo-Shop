import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import images from "../../assets/images.js";
import "./carousel.css";

const Carousel = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carouselRef}
      className="carousel section__margin"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images.map((image, index) => {
          return (
            <motion.div className="carousel-item" key={index}
            href= "https://www.w3schools.com/cssref/css3_pr_flex.php">
              <img src={image} alt="Carousel Item"/>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;

// const Carousel = () => {
//   const boxRef = useRef(null)
// return (
//   <div
//       style={{
//           height: '300px',
//           padding: '10px',
//           border: '1px solid black',
//           display: 'flex',
//           width: '25%',
//           overflowX: 'hidden',
//       }}
//       ref={boxRef}
//   >
//       <motion.div
//           style={{
//               height: '50px',
//               padding: '10px',
//               border: '1px solid black',
//               display: 'inline-flex',
//               gap: '10px',
//           }}
//           drag='x'
//           dragConstraints={boxRef}
//       >
//           {
//               Array.from({length: 20}).map((_, i) => (
//                   <div
//                       key={i}
//                       style={{
//                           minWidth: '50px',
//                           height: '50px',
//                           backgroundColor: 'red',
//                       }}
//                   />
//               ))
//           }
//       </motion.div>
//   </div>
// )
// }

// export default Carousel;
