import React from 'react'

const Search = () => {
  return (
    <div className='filter-section'>
        <div className='search-option'>
          <div className='search-section'>
            <img className='search-input-icon' src="/src/assets/search.svg" alt="" width={30} height={30}/>
            <input className='search-input' type='text' placeholder='Search the creative world at work'></input>

          </div>
        <div className='category-section'>
            <a className='active'>Projects</a>
            <a>Assets</a>
            <a>Prototypes</a>
            <a>Images</a>
            <a>Streams</a>
            <a>People</a>
            <a>MoodBoards</a>
        </div>
        </div>
        <div className='filter-selection'>
            <div>
                <select className='filter-options'><option>Creative Feilds</option> </select>
                <select className='filter-options'><option>Tools</option> </select>
                <select className='filter-options'><option>Color</option> </select>
                <select className='filter-options'><option>Location</option> </select>
                <select className='filter-options'><option>Schools</option> </select>
                <select className='filter-options'><option>Assets</option> </select>
                <select cl assName='filter-options'><option>Subscription</option> </select>
            </div>
            <select><option>Recomended</option> </select>
        </div>
    </div>
  )
}

export default Search