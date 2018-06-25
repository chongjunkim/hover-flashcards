import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className="card-container">
    <div className="card default">
      <div className="front">
        <div className="imgWrapper">
          <img src={props.sprite} alt="front" className="frontFaced"/>
        </div>
      </div>
      <div className="back">
        <div className="name">{props.name}</div>
        <div className="imgWrapper">
          <img src={props.spriteBack} alt="back" className="backFaced"/>
        </div>
        <div className="type">{props.type}</div>
      </div>
    </div>
  </div>
)

export default Card