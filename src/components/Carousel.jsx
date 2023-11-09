import images1 from  "../assets/1.png"
import images2 from "../assets/2.png"
import images3 from "../assets/3.png"
import images4 from "../assets/4.png"
import React, { useState, useEffect } from 'react';

const images = [
  
  [images1],
  [images2],
  [images3],
  [images4],
 
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[55%] flex justify-center items-center -mt-[1%]">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Carousel;
