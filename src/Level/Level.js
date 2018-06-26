import React, { Component } from 'react';
import './Level.css';
import $ from 'jquery';

class Level extends Component {

  setLevel(event) {
    console.log(event.target.value);
  }
  onSiteChanged1(){
    $('.card').attr('class', 'card default');
    $('.name').css({'color' : 'white'});
    $('.type').css({'color' : 'white'});
    $('.tip').text('The card will flip when you hover your mouse on it.');
    return false;
  }
  onSiteChanged2(){
    $('.card').attr('class', 'card easy');
    $('.name').css({'color' : '#999999'});
    $('.type').css({'color' : '#999999'});
    $('.tip').text('The card will flip for 2 seconds and the text is a little dimmed.');

    $('.easy').on("mouseenter", function() {
      var editor_disabled1 = $(this).data("editor-disabled1");
      if (!editor_disabled1) {
          $('.easy').css({'transform' : 'rotateY('+ 180 +'deg)'});
          var counter = 0;
          var interval = setInterval(function() {
            counter++;
            if (counter === 2) {
              $('.easy').css({'transform' : 'initial'});
              clearInterval(interval);
            }
          }, 1000);
          $(this).data("editor-disabled1", true); // disable until we cancel
      }
    });
    $('.btnDraw').click(function() {
      $('.easy').data("editor-disabled1", false);
      $('.medium').data("editor-disabled2", false);
      $('.hard').data("editor-disabled3", false);
    });
  }
  onSiteChanged3(){
    $('.card').attr('class', 'card medium');
    $('.name').css({'color' : '#444444'});
    $('.type').css({'color' : '#444444'});
    $('.tip').text('The card will flip for 1 seconds and the text is more dimmed.');

    $('.medium').on("mouseenter", function() {
      var editor_disabled2 = $(this).data("editor-disabled2");
      if (!editor_disabled2) {
          $('.medium').css({'transform' : 'rotateY('+ 180 +'deg)'});
          var counter = 0;
          var interval = setInterval(function() {
            counter++;
            if (counter === 1) {
              $('.medium').css({'transform' : 'initial'});
              clearInterval(interval);
            }
          }, 1000);
          $(this).data("editor-disabled2", true); // disable until we cancel
      }
    });
    $('.btnDraw').click(function() {
      $('.easy').data("editor-disabled1", false);
      $('.medium').data("editor-disabled2", false);
      $('.hard').data("editor-disabled3", false);
    });
  }
  onSiteChanged4(){
    $('.card').attr('class', 'card hard');
    $('.name').css({'color' : '#363636'});
    $('.type').css({'color' : '#363636'});
    $('.tip').text('The card will flip for 0.5 seconds and the text is barely visible.');

    $('.hard').on("mouseenter", function() {
      var editor_disabled3 = $(this).data("editor-disabled3");
      if (!editor_disabled3) {
          $('.hard').css({'transform' : 'rotateY('+ 180 +'deg)'});
          var counter = 0;
          var interval = setInterval(function() {
            counter++;
            if (counter === 1) {
              $('.hard').css({'transform' : 'initial'});
              clearInterval(interval);
            }
          }, 500);
          $(this).data("editor-disabled3", true);
      }
    });
    $('.btnDraw').click(function() {
      $('.easy').data("editor-disabled1", false);
      $('.medium').data("editor-disabled2", false);
      $('.hard').data("editor-disabled3", false);
    });
  }

  render(){
    return(
      <div className="level" onChange={this.setLevel.bind(this)}>
        <ul className="levelWrapper">
          <li>
            <input type="radio" name="level" value="Default" defaultChecked onChange={this.onSiteChanged1} id="defaultButton"/>
            <label htmlFor="defaultButton">
              <img src="https://vignette.wikia.nocookie.net/pokemon/images/1/13/Poke_Ball_Sprite.png/revision/latest?cb=20151205192135" alt="pokeball" />
              Basic
            </label>
          </li>
          <li>
            <input type="radio" name="level" value="Easy" onChange={this.onSiteChanged2} id="easyButton"/>
            <label htmlFor="easyButton">
            <img src="https://vignette.wikia.nocookie.net/pokemon/images/0/04/Great_Ball_Sprite.png/revision/latest?cb=20151206104449" alt="pokeball" />
              Great
            </label>
          </li>
          <li>
            <input type="radio" name="level" value="Medium" onChange={this.onSiteChanged3} id="mediumButton"/>
            <label htmlFor="mediumButton">
              <img src="https://vignette.wikia.nocookie.net/pokemon/images/0/04/Ultra_Ball_Sprite.png/revision/latest?cb=20151206104354" alt="pokeball" />
              Ultra
            </label>
          </li>
          <li>
            <input type="radio" name="level" value="Hard" onChange={this.onSiteChanged4} id="hardButton"/>
            <label htmlFor="hardButton">
              <img src="https://vignette.wikia.nocookie.net/pokemon/images/a/a1/Master_Ball_Sprite.png/revision/latest?cb=20151208194000" alt="pokeball" />
              Master
            </label>
          </li>
        </ul>
      </div>
    )
  }
}

export default Level