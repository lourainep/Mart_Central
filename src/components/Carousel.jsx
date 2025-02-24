import React, { useState, useEffect } from 'react';
import images1 from '../assets/1.png';
import images2 from '../assets/2.png';
import images3 from '../assets/3.png';
import images4 from '../assets/4.png';

const images = [images1, images2, images3, images4];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[55%]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
        Your Text Here
      </div>
    </div>
  );
};

export default Carousel;
