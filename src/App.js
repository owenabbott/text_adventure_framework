import React, { Component } from 'react'

export default class App extends Component {
  
  //handleStart? Maybe create a user component, so users can save where they are in the story?
  //I'm a little against adding Auth stuff to these simple apps. The likelihood of prospective employers to actually use them drops.
  //On the other hand, it is a basic skill to showcase.

  //Maybe I can do both. Add a user creation thing with authorization, and a 'play as guest' feature for people that don't want to make an account.
  
  //handleOption = () => {
  //This will be a function that handles where to route the story, based on the keystroke of the player.
  //It will check the keypress against the options props in the component, and then render a new component path based on said keypress input.
  //}

  //before I go further with this, I need to learn how to use Redux. Otherwise the app state will be bloated, as it is in my react blackjack project.


  render() {
    return (
      <div>
        
      </div>
    )
  }
}
