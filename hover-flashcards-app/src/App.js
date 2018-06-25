import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import Draw from './Draw/Draw';
import Level from './Level/Level';
import firebase from 'firebase/app';
import 'firebase/database';

import $ from 'jquery';

import { DB_CONFIG } from './Config/Firebase/db_config';

class App extends Component {
  constructor(props){
    super(props);
    
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        eng: snap.val().eng,
        han: snap.val().han,
        pin: snap.val().pin,
        sprite: snap.val().sprite,
        spriteBack: snap.val().spriteBack,
        name: snap.val().name,
        type: snap.val().type,
      })
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
      
      $('.default').mouseover(function(){
        $('.default').stop().css({'transform' : 'rotateY('+ 180 +'deg)'});
        $('.default').parent().mouseleave(function(){
          $('.default').stop().css({'transform' : 'initial'});
        });
        return false;
      });

      $('.card').attr('draggable', 'false');
    })
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card 
            eng={this.state.currentCard.eng} 
            han={this.state.currentCard.han} 
            pin={this.state.currentCard.pin}
            sprite={this.state.currentCard.sprite}
            spriteBack={this.state.currentCard.spriteBack}
            name={this.state.currentCard.name}
            type={this.state.currentCard.type}
          />
        </div>
        <div className="buttonRow">
          <Draw drawCard={this.updateCard}/>
        </div>
        <div className="button2Row">
          <Level/>
        </div>
      </div>
    );
  }
}

export default App;
