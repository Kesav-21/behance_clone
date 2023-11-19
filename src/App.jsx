import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import './App.css'
import { data } from './data/data'

const App = () => {
  return (
    <>
      <Header/>
      <Search data={data}/>
    </>
  )
}
export default App