import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-tr from-[#18192B] via-[#2B2256] to-[#4B3B8B] px-8 py-6 relative">
        <h1 className="text-2xl font-semibold text-white mb-6 ml-8 pt-2">Jibly.ai</h1>

        <button className="rounded-full bg-pink-500 text-white border border-[#e5e5e5] mt-3 mr-13 px-4 py-2 absolute top-4 right-4 hover:bg-[#e5e5e5] hover:text-black transition duration-300 ease-in-out">
          Sign Up
        </button>

        <div className="mt-20 ml-160">
          <button className="text-white bg-pink-500 px-4 py-2 rounded-full border border-[#e5e5e5] hover:bg-[#e5e5e5] hover:text-black transition duration-300">
            Welcome to Jibly.ai
          </button>
        </div>

        <div className='text-center mt-8 max-w-2xl mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-semibold text-white tracking-tight md:leading-tight'>
            Revolutionize Your Job Hunt with AI-Powered Insights
          </h2>
          <p className='text-lg font-light sm:text-xl text-gray-300 mt-4'>
            Analyzes live job listings and your resume in real-time to show your eligibility, improvement areas, and even writes custom cover letters — instantly.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
