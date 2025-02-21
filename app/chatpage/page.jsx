import React from 'react'
import Image from 'next/image'
import send from '@/public/send.svg'
import banner2 from '@/public/banner2.svg'
import { Separator } from "@/components/ui/separator"

function chatbot() {
  return (
    <div className="flex justify-center items-center gap-4 h-screen bg-purple-50">

      <div className="bg-purple-50 w-1/5 h-4/5 flex items-center border">
        <Image
          src={banner2} 
          alt=""
          className="p-2"/>
      </div>
      
     
      <div className="bg-purple-50 w-[48%] min-w-[500px] h-4/5 border">
        <div className="section-2 h-full p-4 rounded-lg mb-8">
          <div className="w-full h-5/6 bg-purple-100 rounded-lg p-4">
            <p></p>
          </div>
          
          
          <div className="flex justify-between mx-auto w-full h-16 bg-white border-2 border-gray-100 rounded-lg mt-8">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 m-2 h-full">
                <input 
                  className="w-full h-full bg-transparent px-4 border-none outline-none" 
                  type="text" 
                  placeholder="Type your query here...."
                />
              </div>
              <div className="p-2">
                <button className="text-black p-2 h-12 w-12 flex items-center justify-center">
                  <Image
                    src={send} 
                    alt="Send"
                    className="h-8 w-8 object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 w-1/6 h-4/5 border">
        <h1 className="text-purple-700 font-semibold text-center text-3xl p-4 m-auto">FREQUENT PROMPTS</h1>
        <ul className="text-gray-400 p-2 text-xl font-medium">
          <li className="p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, hic.</li>
          <Separator/>
          <li className="p-2">Lorem ipsum, dolor sit amet.</li>
          <Separator/>
          <li className="p-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
          <Separator/>
          <li className="p-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, hic.</li>
        </ul>
      </div>
    </div>
  )
}

export default chatbot