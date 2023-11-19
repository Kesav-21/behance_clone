import React from 'react'
import Card from './Card'

const Listings = ({data}) => {
  return (
    <div className='listing-container'>
      {
        data.map(e=>{
          return (
            <Card title={e.title} author={e.author} likesCount={e.likesCount} viewsCount={e.viewsCount} src={e.src} id={e.id}/>
          )
        })
      }
    </div>
  )
}

export default Listings