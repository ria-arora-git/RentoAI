'use client'
import { ChatWithRent, TestDB } from '@/server/openai/action'
// import { Button } from '@heroui/react'
import React, {useState} from 'react'
import Header from '../components/Header'

function page() {
    const [prompt, setprompt] = useState("")
    async function call(){
        const res = await ChatWithRent(prompt)
        console.log(res)
    }


  return (
    <div>
        <Header/>
      <input className="text-black" type="text" onChange={(e)=>setprompt(e.target.value)} value={prompt}/>
      <button onPress={call}>Call</button>
    </div>
  )
}

export default page
