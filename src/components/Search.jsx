import React, { useState } from 'react'
import { search_terms } from '../data/data';
import Listings from './Listings'
import {colors} from '../data/data';
import { location } from '../data/data';

const Search = ({data}) => {
  const [listData,setListData]=useState(data);
  const [filtered,setFiltered]=useState(data);

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return search_terms.filter(function(term) {
	  if (term.match(reg)) {
  	  return term;
	  }
  });
}

function showResults(e) {
  var val=e.target.value
  var res = document.getElementById("search-suggestion");
  res.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(val);
  for (let i=0; i<terms.length; i++) {
    list += '<li>' + terms[i] + '</li>';
  }
  res.innerHTML = '<ul>' + list + '</ul>';
  console.log(list)
}

const handleSort=(e)=>{
  var val=e.target.value;
  if(val=='Recommended'){
  setFiltered(listData.filter(ele=>ele.recommended))
}else if(val=="Curated"){
    setFiltered(listData.filter(ele=>ele.curated))
  }else if(val=='Most Appreciated'){
    setFiltered(listData.filter(ele=>ele.appreciated))
  }else if(val=='Most Viewed'){
    setFiltered(listData.filter(ele=>ele.viewed))
  }else if(val=='Most Discussed'){
    setFiltered(listData.filter(ele=>ele.discussed))
  }else if(val=='Most Recent'){
    setFiltered(listData.filter(ele=>ele.recent))
  }
  else{
    setFiltered(data)
  }

}
  
  return (
    <>
    <div className='filter-section'>
        <div className='search-option'>
          <div className='search-section'>
            <img className='search-input-icon' src="./assets/images/search.svg" alt="" width={30} height={30}/>
            <form autocomplete="off">
              <input className='search-input' type='text' placeholder='Search the creative world at work' id="search" onKeyUp={showResults}/>
            </form>
          <div id="search-suggestion"></div>
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
            <div className='filters'>
                <select className='filter-options'>
                  <option>Creative Feilds</option> 
                </select>
                <select className='filter-options'><option>Tools</option> </select>
                <select className='filter-options'>
                  <option>Color</option>
                  {colors.map(color=>{
                    return(<option>{color}</option>)
                  })}
                  </select>
                <select className='filter-options'>
                  <option>Location</option>
                  {location.map(loc=>{
                    return(<option>{loc}</option>)
                  })}
                  </select>
                <select className='filter-options'><option>Schools</option> </select>
                <select className='filter-options'><option>Assets</option> </select>
                <select cl assName='filter-options'><option>Subscription</option> </select>
            </div>
            <div className='sort-section'>
              <p className='sort-selection'>Sort</p>
              <select onChange={handleSort}>
                <option>Recomended</option>
                <option>Curated</option>
                <option>Most Appreciated</option>
                <option>Most Viewed</option>
                <option>Most Discussed</option>
                <option>Most Recent</option>
              </select>
            </div>
        </div>
    </div>
    <Listings data={filtered}/>
    </>
  )
}

export default Search