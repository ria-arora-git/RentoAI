'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import send from '@/public/send.svg'
import banner2 from '@/public/banner2.svg'
import { Separator } from "@/components/ui/separator"
import { ChatWithRent } from '@/server/openai/action'
import { cn } from '@/lib/utils'
import Markdown from 'react-markdown'

function Chatbot() {
  const [loading, setLoading] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, I'm RentoAI. How can I help you today?", sender: "bot" }
  ])
  const frequentPrompts = [
    "What is the best location to get a pg in",
    "what are the average property rates",
    "Give me some points to bargain",
    "Best top 5 property location with comparison"
  ]

  async function call(inputPrompt) {
    setMessages((prevMessages) => [...prevMessages, { id: crypto.randomUUID(), text: inputPrompt, sender: "user" }])
    setPrompt("")
    setLoading(true)
    const resp = await ChatWithRent(inputPrompt)
    console.log(resp)
    setLoading(false)
    setMessages((prevMessages) => [...prevMessages, { id: crypto.randomUUID(), text: resp.answer, sender: "bot" }])
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      call(prompt)
    }
  }

  function handlePromptClick(selectedPrompt) {
    setPrompt(selectedPrompt)
    setTimeout(() => {
      call(selectedPrompt)
    }, 100)
  }

  return (
    <div className="flex justify-center items-center gap-4 h-screen bg-purple-50">
      
      <div className="bg-purple-50 w-1/5 h-4/5 flex items-center border">
        <Image src={banner2} alt="" className="p-2" />
      </div>
      <div className="bg-purple-50 w-[48%] min-w-[500px] h-4/5 border">
        <div className="section-2 h-full p-4 rounded-lg mb-8">
          <div className="w-full h-5/6 bg-purple-100 space-y-6 rounded-lg p-4 overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id} className={`flex w-full ${message.sender === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`p-4 bg-white rounded-lg shadow-md text-black ${message.sender === "bot" ? "bg-purple-200" : "bg-purple-300"}`}>
                  <Markdown>{message.text}</Markdown>
                </div>
              </div>
            ))}
            <div className={cn(`flex w-full justify-start`, !loading && "hidden")}>
              <div className={`p-4 rounded-lg shadow-sm bg-purple-200`}>
                <p className="text-black animate-pulse"> Response is generating.... </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-auto w-full h-16 bg-white border-2 border-gray-100 rounded-lg mt-8">
            <div className="flex justify-between items-center w-full">
              <div className="flex-1 m-2 h-full">
                <input className="w-full h-full bg-transparent px-4 border-none outline-none text-black" type="text" onChange={(e) => setPrompt(e.target.value)} onKeyPress={handleKeyPress} value={prompt} placeholder="Type your query here...." />
              </div>
              <div className="p-2">
                <button className="text-black p-2 h-12 w-12 flex items-center justify-center" onClick={() => call(prompt)}>
                  <Image src={send} alt="Send" className="h-8 w-8 object-contain" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 w-1/6 h-4/5 border">
        <h1 className="text-black bg-purple-300 font-semibold text-center text-3xl p-4 m-auto font-sans">FREQUENT PROMPTS</h1>
        <ul className="text-gray-500 py-1 px-4 text-xl font-medium text-center">
          {frequentPrompts.map((prompt, index) => (
            <li key={index} className="py-1 cursor-pointer" onClick={() => handlePromptClick(prompt)}>
              {prompt}
              <Separator className='m-2'/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Chatbot