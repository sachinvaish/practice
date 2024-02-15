import { useState } from 'react'
import './App.css'
import Accordian from './components/Accordian'
import RandomCOlor from './components/RandomColor'
import StarRating from './components/StarRating'
import ImageSlider from './components/ImageSlider'

function App() {

  return (
    <>
      <h1>Practice Projects</h1>
      <Accordian/>
      <RandomCOlor/>
      <StarRating/>
      <ImageSlider url={'https://picsum.photos/v2/list?page=1&limit=10'}/>
    </>
  )
}

export default App
