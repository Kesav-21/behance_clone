import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Search from './components/Search'
import Listings from './components/Listings'
import './App.css'

const App = () => {
  return (
    <>
      <Header/>
      <Search/>
      <Listings/>
    </>
  )
}
export default App