
import React, { useState, useEffect } from 'react';

const images = [
  'src/assets/1.png',
  'src/assets/2.png',
  'src/assets/3.png',
  'src/assets/4.png',
 
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
