import React from 'react'
import './searchbox.css'
function Searchbox(props)
{
    return(
            <input 
               className='searchbox'
               type='search'
               placeholder='search'
               onChange={props.handleOnserach}
            />
    )
}
export default Searchbox