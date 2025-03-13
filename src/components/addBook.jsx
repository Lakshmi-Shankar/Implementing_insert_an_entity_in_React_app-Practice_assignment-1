import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function addBook() {
    const naviagate = useNavigate();

    const hadleNav = ()=>{
        naviagate('/')
    }
  return (
    <div className='FORM'>
        <h2 className='addTitle'>Add Book</h2>
        <form  className='forForm'>
            <input placeholder='Title' type='text' className='title'></input>
            <input placeholder='Author' type='text' className='author'></input>
            <textarea placeholder='Description' className='desc'></textarea>
            <input placeholder='Cover Image URL' type='url' className='IMAGE'></input>
        </form>
        <button type='Submit' className='addButton' onClick={hadleNav}>Add</button>
    </div>
  )
}

export default addBook
