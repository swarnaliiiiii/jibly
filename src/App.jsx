import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-tr from-blue-950 from-60% to-emerald-500 to-90% ">
      <h1 className='text-2xl font-bold m-8 pl-19 text-white'>Jibly.ai</h1>
      <button className='rounded-full bg-pink text-white border border-[#e5e5e5] mt-3 mr-13 px-4 py-2 absolute top-4 right-4 hover:bg-[#e5e5e5] hover:text-black transition duration-300 ease-in-out'>
         Sign Up
      </button>
      <button className='flex flex-col items-center bg-p'>
        Welcome to Jibly.ai
      </button>
      </div>
    </> 
  )
}

export default App
