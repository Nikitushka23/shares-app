import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelected } from "../reducer/actions";
import {SearchRender} from './SearchRender'

export const Search = () => {
  const isSelected = useRef('');

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected);
  console.log("Search -> selected", selected)

  
  const findHandler = (e) => {
    e.preventDefault()
    dispatch(setSelected(isSelected.current.toUpperCase()))
    isSelected.current = ''
  }

  const inputHandler = (e) => {
    e.preventDefault()
    isSelected.current = e.target.value
  }

  return (
    <div className='search-block'>
      <div className='search-bar'>
      <input className='input-search' type='text' onChange={inputHandler} ref={isSelected}></input>
      <input className='input-button' type='submit' onClick={findHandler} value='search'></input>    
      </div>
      {selected !== '' ? <SearchRender /> : 'Enter name of share'}
    </div>
  );
};
