import React, { Component } from 'react';
import './Draw.css';

class Draw extends Component {
  constructor(props){
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }
  drawCard(){
    this.props.drawCard();
  }
  render(){
    return(
      <div className="buttonContainer">
        <button className="btnDraw" onClick={this.drawCard}>DRAW</button>
      </div>
    )
  }
}

export default Draw