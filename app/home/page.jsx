"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useUser, UserButton, SignUp } from '@clerk/clerk-react';
import logo from '@/public/logo.svg';

const slides = [
  { src: '/1.jpg', alt: 'Ad 1' },
  { src: '/2.jpg', alt: 'Ad 2' },
  { src: '/1.jpg', alt: 'Ad 3' },
  { src: '/2.jpg', alt: 'Ad 4' }
];

const cardData = [
  { title: 'Property No.1', description: 'Description for Property No.1.', imageSrc: '/1.jpg', imageAlt: 'Image for Property No.1' },
  { title: 'Property No.2', description: 'Description for Property No.2.', imageSrc: '/2.jpg', imageAlt: 'Image for Property No.2' },
  { title: 'Property No.3', description: 'Description for Property No.3.', imageSrc: '/3.jpg', imageAlt: 'Image for Property No.3' },
  { title: 'Property No.4', description: 'Description for Property No.4.', imageSrc: '/1.jpg', imageAlt: 'Image for Property No.4' },
  { title: 'Property No.5', description: 'Description for Property No.5.', imageSrc: '/2.jpg', imageAlt: 'Image for Property No.5' },
  { title: 'Property No.6', description: 'Description for Property No.6.', imageSrc: '/3.jpg', imageAlt: 'Image for Property No.6' },
  { title: 'Property No.7', description: 'Description for Property No.7.', imageSrc: '/1.jpg', imageAlt: 'Image for Property No.7' },
  { title: 'Property No.8', description: 'Description for Property No.8.', imageSrc: '/2.jpg', imageAlt: 'Image for Property No.8' },
  { title: 'Property No.9', description: 'Description for Property No.9.', imageSrc: '/3.jpg', imageAlt: 'Image for Property No.9' }
];

const Card = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="w-full h-48 relative mb-4">
        <Image src={imageSrc} alt={imageAlt} layout="fill" objectFit="cover" className="rounded" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className='w-full fixed top-0 left-0 bg-purple-800 backdrop-blur-sm z-50 h-16 flex justify-between items-center px-4 border-b border-purple-300/20'>
        <div className='flex justify-between items-center'>
          <div className='hover:scale-105 transition-transform duration-300'>
            <Image
              src={logo}
              alt='logo'
              className='h-20 w-20 p-1 ml-6'
            />
          </div>
          <div>
            <h1 className='text-white text-4xl font-bold ml-2 hover:text-purple-300 transition-colors'>RentoAI</h1>
          </div>
        </div>
        <div className='p-2 mx-8 flex justify-between text-xl font-semibold text-white gap-16'>
          <a href="/preferenceform" className='hover:text-purple-300 transition-colors'>Publish your ad</a>
          <a href="/chatpage" className='hover:text-purple-300 transition-colors'>AiBot</a>
    
          <div className="mx-4 gap-6 flex">
            {isSignedIn ? <UserButton /> : <SignUp />}
          </div>
        </div>
      </header>
      <div className="my-4 flex flex-col justify-center items-baseline text-center mt-16">
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
