import { useState } from 'react'
import './App.css'
import Accordian from './components/Accordian'
import RandomCOlor from './components/RandomColor'
import StarRating from './components/StarRating'

function App() {

  return (
    <>
      <h1>Practice Projects</h1>
      <Accordian/>
      <RandomCOlor/>
      <StarRating/>
    </>
  )
}

export default App
