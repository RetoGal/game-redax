import React from 'react'
import {GameResultMessage} from "./stylesForGameMessage"



  const GameStatusMessage = (props) => (
    <GameResultMessage>
      {props.matrix.theResultOfTheGame === 'youWon'
        ? 'CONGRATULATIONS!! YOU WON'
        : props.matrix.theResultOfTheGame === 'gameOver'
        ? 'YOU LOST'
        : ''}
    </GameResultMessage>
  )
  
export default GameStatusMessage