import React from 'react'
import "./card.css";
type cardProps={
  name:string;
  imgURL:string;
  prominentColor?: string;
  ability?:string;
}
function Card({name,imgURL,prominentColor ,ability,}:cardProps) {
  return (
    <div className='individual_card_container' >
        <div className='individual_card-image-container' style={{backgroundColor:prominentColor}}>
            <img src={imgURL} alt={name}  className="pokeImage"/>
        </div>
        <div className='individual_card-detail-container'>
            <div className='individual_card-name-container'>
                <h3>{name}</h3>
            </div>
            <div className='individual_card-ability-container'>
                <h4>{ability}</h4>
        </div>
    </div>
    </div>
  )
}

export default Card