"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import I1 from "../IMAGES/Slide 1.png"
import I2 from "../IMAGES/Slide 2.png"
import I3 from "../IMAGES/Slide 3.png"
import I4 from "../IMAGES/Slide 4.png"

const slides = [
  {
    id: 1,
    image: I1, // Replace with actual image paths
  },
  {
    id: 2,
    image: I2, // Replace with actual image paths
  },
  {
    id: 3,
    image: I3, // Replace with actual image paths
  },
  {
    id: 4,
    image: I4, // Replace with actual image paths
  },
];

const ImageSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval); // Cleanup the interval on unmount
  }, []);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-gray-100">
      <div className="w-full h-full relative">
        {/* Slide Content */}
        <div className=' w-full text-black text-3xl font-extrabold tracking-widest flex items-center justify-center mt-[12vw] ' >
            <p>Our Features</p>
        </div>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-400 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >

            {/* Image */}
            <div className="w-[80%] h-[60%]">
              <Image
                src={slide.image}
                alt=""
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>

          </div>
        ))}

        {/* Navigation Controls */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 transform top-[25vh] -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4  transform top-[25vh] -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlideshow;
