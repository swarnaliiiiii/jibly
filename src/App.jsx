import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen bg-slate-900 px-8 py-6 relative">
        <h1 className="text-2xl font-semibold text-white mb-6 ml-8 pt-2">Jibly.ai</h1>
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-40 blur-3xl rounded-full pointer-events-none z-0" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-40 blur-3xl rounded-full pointer-events-none z-0" />
        <button className="rounded-full text-glow-pulse bg-pink-500 text-white border border-[#e5e5e5] mt-3 mr-13 px-4 py-2 absolute top-4 right-4 hover:bg-[#e5e5e5] hover:text-black transition duration-300 ease-in-out">
          Sign Up
        </button>

        <div className="mt-20 ml-160">
          <button className="text-white bg-pink-500 px-4 py-2 rounded-full border border-[#e5e5e5] hover:bg-[#e5e5e5] hover:text-black transition duration-300">
            Welcome to Jibly.ai
          </button>
        </div>

        <div className='text-center mt-8 max-w-2xl mx-auto'>
          <h2 className='text-4xl sm:text-5xl font-semibold text-white tracking-wide md:leading-tight'>
            Revolutionize Your Job Hunt with AI-Powered Insights
          </h2>
          <p className='text-lg font-light sm:text-xl text-gray-300 mt-4'>
            Analyzes live job listings and your resume in real-time to show your eligibility, improvement areas, and even writes custom cover letters — instantly.
          </p>
          <button className='mt-8 bg-pink-500 text-glow-pulse text-white px-6 py-3 rounded-full border border-[#e5e5e5] hover:bg-[#e5e5e5] hover:text-black transition duration-300'>
            Get Started
          </button>
          <button className='mt-8 mr-4 ml-3 bg-grey-500 text-glow-pulse text-white px-6 py-3 rounded-full border border-[#e5e5e5] hover:bg-[#e5e5e5] hover:text-black transition duration-300'>
            Learn More
          </button>
        </div>
        <div className='absolute right-0 bottom-0'>
          <h1 className='text-small font-thin text-white mb-6 mr-8 pt-2'>
            Made with ♡ by Swarnali
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
