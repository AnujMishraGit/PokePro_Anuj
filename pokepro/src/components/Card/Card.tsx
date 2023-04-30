import React from 'react'
import "./card.css"
function Card({name,imgURL,prominentColor ,ablity,}) {
  return (
    <div className='individual_card_container' >
        <div className='individual_card-image-container'>
            <img src={imgURL} alt={name}  className="pokeImage"/>
        </div>
        <div className='individual_card-detail-container'>
            <div className='individual_card-name-container'>
                <h3>{name}</h3>
            </div>
            <div className='individual_card-ability-container'>
                <h4>{ablity}</h4>
        </div>
    </div>
    </div>
  )
}

export default Card