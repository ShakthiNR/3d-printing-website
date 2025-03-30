import React from 'react'
import Header from './components/Header'
import Content, { LastContent } from './components/Content'
import ImageCarousel from './components/ImageCarousel'
import Footer from './components/Footer'
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <ImageCarousel />
      <LastContent />
      <Footer />
    </div>
  )
}

export default App