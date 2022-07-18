import { DivGameWrapper, DivСellСharacter } from './wrapperStyles'
import GameBoard from '../gameBoard/gameBoard'

const GameWrapper = ({ currentGameState }) => {
  const matrix = currentGameState.matrix
 return (
    <DivGameWrapper matrix={matrix}>
      {matrix.map((row) =>
        row.map((cell, i) => {
          return (
            <DivСellСharacter key={i}>
              <GameBoard cell={cell} key={i} />
            </DivСellСharacter>
          )
        })
      )}
    </DivGameWrapper>
  )
}

export { GameWrapper }
