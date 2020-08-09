import React from 'react'
import './card.css'
function Card(props)
{
    return(
        <div className="Card-Container">
            <img alt="Avatar" src={`https://robohash.org/${props.information.id}?set=set3&size=240x240`}/>
            <h1>{props.information.name}</h1>
            <p> {props.information.email}</p>
        </div>
    )
    
}

export default Card