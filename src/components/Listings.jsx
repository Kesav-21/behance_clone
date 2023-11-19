import React from 'react'
import Card from './Card'
import { data } from '../data/data'

const Listings = () => {
  return (
    <div className='listing-container'>
      {
        data.map(e=>{
          return (
            <Card title={e.title} author={e.author} likesCount={e.likesCount} viewsCount={e.viewsCount}/>
          )
        })
      }
    </div>
  )
}

export default Listings