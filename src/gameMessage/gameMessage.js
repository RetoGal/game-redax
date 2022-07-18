import React from 'react'
import { GameResultMessage } from './stylesForGameMessage'

const GameStatusMessage = ({ currentGameState }) => (
  <GameResultMessage>
    {currentGameState.theResultOfTheGame === 'youWon'
      ? 'CONGRATULATIONS!! YOU WON'
      : currentGameState.theResultOfTheGame === 'gameOver'
      ? 'YOU LOST'
      : ''}
  </GameResultMessage>
)

export default GameStatusMessage
