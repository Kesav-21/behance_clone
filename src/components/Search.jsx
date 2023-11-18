import React from 'react'

const Search = () => {
  return (
    <div>
        <div>
        <input></input>
        <div>
            <a>Projects</a>
            <a>Assets</a>
            <a>Prototypes</a>
            <a>Images</a>
            <a>Streams</a>
            <a>People</a>
            <a>MoodBoards</a>
        </div>
        </div>
        <div>
            <div>
                <select><option>Creative Feilds</option> </select>
                <select><option>Tools</option> </select>
                <select><option>Color</option> </select>
                <select><option>Location</option> </select>
                <select><option>Schools</option> </select>
                <select><option>Assets</option> </select>
                <select><option>Subscription</option> </select>
            </div>
            <select><option>Recomended</option> </select>
        </div>
    </div>
  )
}

export default Search