import { DivGameWrapper, DivСellСharacter } from './wrapperStyles'
import GameBoard from '../gameBoard/gameBoard'
const GameWrapper = (props) => {
  const gameState = props.currentGameState
  console.log(props.currentGameState)
  return (
    <DivGameWrapper matrixLength={gameState.length}>
      {gameState.map((row) =>
        row.map((cell, i) => {
          return (
            <DivСellСharacter key={i}>
              <GameBoard cell={cell} />
            </DivСellСharacter>
          )
        })
      )}
    </DivGameWrapper>
  )
}

export default GameWrapper
