import { DivGameWrapper, DivСellСharacter } from './wrapperStyles'
import GameBoard from '../gameBoard/gameBoard'

const GameWrapper = ({ currentGameState }) => {
  console.log(currentGameState, 1)
  const matrix = currentGameState.matrix

  return (
    <DivGameWrapper matrix={matrix}>
      {matrix.map((row) =>
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

export { GameWrapper }
