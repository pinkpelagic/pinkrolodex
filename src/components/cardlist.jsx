import React from 'react'
import './cardlist.css'
import Card from './card.jsx'
function Cardlist (props)
{
    return(
        <div className="Cardlist">
            {props.informations.map(information => (
              <Card key={information.id}  information={information}/>
            ))}
        </div>
    )
}
export default Cardlist