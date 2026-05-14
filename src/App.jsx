import React from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import News from './pages/News'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar className="sticky top-0 z-10"/>
      <Category className="my-10"/>
      <News />
      <Footer/>
    </>
  )
}

export default App