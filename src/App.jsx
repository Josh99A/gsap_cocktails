import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <div className="flex-center h-[100vh] text-3xl text-indigo-300">Hello, GSAP!</div>
  )
}

export default App
