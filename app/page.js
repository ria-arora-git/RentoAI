"use client"

import React from 'react';

function LandingPage() {
  return (
    <div className="h-[100vh] bg-black min-h-screen flex flex-col items-center justify-center">
      <header className="h-[8vh] bg-purple-900 w-full py-4 shadow-lg flex justify-between ">
        <h1 className="text-white text-3xl px-6">RentoAI</h1>
        <div className="mx-4 gap-6 flex">
          <a href='/login'>
          <button className=' bg-white shadow-sm rounded-md text-xl text-black px-2 py-1 flex justify-center items-center shadow-black hover:bg-gray-200'>Login</button>
          </a>
          <a href='/signup'>
          <button className=' bg-white shadow-sm rounded-md text-xl text-black px-2 py-1 flex justify-center items-center shadow-black hover:bg-gray-200'>Sign Up</button>
          </a>
        </div>
      </header>
      <main className="h-[86] flex-1 flex flex-col items-center justify-center">
        <h2 className="text-8xl text-white-700 mb-2">RentoAI</h2>
        <p className="text-white-600 text-center max-w-md mb-14">Find the home that meet your needs.</p>
        <a href='/home'>
          <button
          className="w-60 h-20 bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-lg text-3xl"
          radius="full"
          >
          Get Started
          </button>
        </a>
      </main>
      <footer className="h-[6vh] bg-purple-900 w-full py-4">
        <p className="text-white text-center">© RentoAI</p>
      </footer>
    </div>
  );
}

export default LandingPage;
