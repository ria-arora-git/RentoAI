'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import banner2 from '@/public/banner2.svg'
import banner from '@/public/banner.webp'
import sample from '@/public/sample.webp'
import { SignUp, UserButton, useUser } from '@clerk/nextjs'


const slides = [
  { src: '/1.jpg', alt: 'Ad 1' },
  { src: '/2.jpg', alt: 'Ad 2' },
  { src: '/1.jpg', alt: 'Ad 3' },
  { src: '/2.jpg', alt: 'Ad 4' }
];

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
            { useUser().isSignedIn ? <UserButton /> : <SignUp />}
          </div>
        </div>
      </header>

      <div className="my-4 flex flex-col justify-center items-baseline text-center pt-16">
        <h2 className="w-full text-3xl font-semibold mb-4 text-black">Find your new home</h2>
        <div className="relative w-full h-80">
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className={`px-6 absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>

      <h1 className='text-4xl font-bold text-black text-center mt-12'>Our <span className='text-purple-700'>Latest</span> Listing</h1>
      <div className='main flex items-center justify-center gap-4 mt-8'>
        <div className='flex relative items-center justify-between gap-4'>
          <div className=' bg-purple-100 h-[75vh] w-[75vh] rounded-2xl'>
            <Image
              src={sample}
              alt='sample'
              className="h-full w-full"
            />
          </div>
          <div className='h-[75vh] w-[75vh] rounded-lg'>
            <div className='w-full bg-purple-100 mx-2 h-3/5 rounded-2xl '>
              <Image
                src={banner}
                alt='sample'
                className="h-full w-full"
              />
            </div>
            <div className='pt-6 h-2/5 flex justify-between gap-2'>
              <div className='w-full ml-2 bg-purple-100 h-full rounded-2xl'>
                <Image
                  src={banner2}
                  alt='sample'
                  className="h-full w-full"
                />
              </div>
              <div className='w-full ml-3 bg-purple-100 h-full rounded-2xl'>
                <Image
                  src={sample}
                  alt='sample'
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 pb-6">
          <a href='/home' className="animate-bounce bg-purple-700 text-white font-bold py-2 px-4 rounded-full text-xl">
            See more options
          </a>
      </div>
    </div>
  );
};

export default HomePage;

