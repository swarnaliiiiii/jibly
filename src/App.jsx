import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-2xl font-bold m-8 pl-10'>Jibly-Context</h1>
      <button className='rounded-full bg-black text-white border border-[#e5e5e5] mt-3 mr-8 px-4 py-2 absolute top-4 right-4 hover:bg-[#e5e5e5] hover:text-black transition duration-300 ease-in-out'>
         Sign Up
      </button>
    </> 
  )
}

export default App
