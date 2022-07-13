import { DivGameWrapper, DivСellСharacter } from './wrapperStyles'
import GameBoard from '../gameBoard/gameBoard'
const GameWrapper = (props) => {
  const matrix = props.matrix

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

export default GameWrapper
