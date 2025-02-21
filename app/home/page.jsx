"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';


const slides = [
  { src: '/1.jpg', alt: 'Ad 1' },
  { src: '/2.jpg', alt: 'Ad 2' },
  { src: '/1.jpg', alt: 'Ad 3' },
  { src: '/2.jpg', alt: 'Ad 4' }
];

const cardData = [
  { title: 'Card 1', description: 'Description for Card 1.', imageSrc: '/1.jpg', imageAlt: 'Image for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2.', imageSrc: '/2.jpg', imageAlt: 'Image for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3.', imageSrc: '/3.jpg', imageAlt: 'Image for Card 3' },
  { title: 'Card 1', description: 'Description for Card 1.', imageSrc: '/1.jpg', imageAlt: 'Image for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2.', imageSrc: '/2.jpg', imageAlt: 'Image for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3.', imageSrc: '/3.jpg', imageAlt: 'Image for Card 3' },
  { title: 'Card 1', description: 'Description for Card 1.', imageSrc: '/1.jpg', imageAlt: 'Image for Card 1' },
  { title: 'Card 2', description: 'Description for Card 2.', imageSrc: '/2.jpg', imageAlt: 'Image for Card 2' },
  { title: 'Card 3', description: 'Description for Card 3.', imageSrc: '/3.jpg', imageAlt: 'Image for Card 3' },
];

const Card = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Image src={imageSrc} alt={imageAlt} width={500} height={300} className="mb-4 rounded" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 ">


      <div className="my-4 flex flex-col justify-center items-baseline text-center">
        <h2 className="w-full text-2xl font-semibold mb-4 text-black">Find your new home</h2>
        <div className="relative w-full h-80">
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className={`px-4 absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
      <div className='w-full text-center text-black text-2xl font-bold mt-6'>
        Explore the options
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10 mt-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
