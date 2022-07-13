import { useSelector, useDispatch } from 'react-redux'
import { DirectionButons, DivForDirectionButtons } from './styled'
import { StartGameButton, SelectGameBoard } from './styled'
import { useState } from 'react'
import createGameBoardMatrix from './functions/setCharacterOnFreePosition'
import GameWrapper from './wrapper/gameWrapper'
import gameMovement from './functions/gameMove'
import GameStatusMessage from './gameMessage/gameMessage'

const buttonsDirection = ['up', 'right', 'left', 'down']
const SELECT_OPTION_VALUE = [5, 7, 10]

const getGameState = (state) => state.gameState

const App = () => {
  const currentGameState = useSelector(getGameState)
  const dispatch = useDispatch()
  const [optionValue, setOptionValue] = useState(SELECT_OPTION_VALUE[0])
  const selectChange = (e) => setOptionValue(parseInt(e.target.value))

  const AddGameState = () => {
    dispatch({
      type: 'change-game-state',
      payload: {
        matrix: createGameBoardMatrix(optionValue),
        theGameContinues: true,
        theResultOfTheGame: '',
      },
    })
  }

  const dispatchCurrentGameState = (direction, currentGameState) => {
    const gameState = gameMovement(direction, { ...currentGameState })
    if (gameState.theResultOfTheGame === 'gameOver') {
      dispatch({
        type: 'change-game-state',
        payload: {
          matrix: [],
          theGameContinues: false,
          theResultOfTheGame: 'gameOver',
        },
      })
    } else if (gameState.theResultOfTheGame === 'youWon') {
      dispatch({
        type: 'change-game-state',
        payload: {
          matrix: [],
          theGameContinues: false,
          theResultOfTheGame: 'youWon',
        },
      })
    } else if (gameState.theGameContinues === true) {
      dispatch({
        type: 'change-game-state',
        payload: {
          matrix: gameState.matrix,
          theGameContinues: true,
          theResultOfTheGame: '',
        },
      })
    }
  }

  return (
    <>
      <StartGameButton key={'startBtn'} onClick={() => AddGameState()}>
        START
      </StartGameButton>
      <SelectGameBoard onChange={selectChange}>
        {SELECT_OPTION_VALUE.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}*{optionValue}
          </option>
        ))}
      </SelectGameBoard>

      {currentGameState.theGameContinues === false ? (
        <GameStatusMessage matrix={currentGameState} />
      ) : (
        <GameWrapper matrix={currentGameState.matrix} />
      )}

      <DivForDirectionButtons>
        {buttonsDirection.map((direction) => {
          return (
            <DirectionButons
              direction={direction}
              key={direction}
              onClick={() =>
                dispatchCurrentGameState(direction, currentGameState)
              }
            >
              {direction}
            </DirectionButons>
          )
        })}
      </DivForDirectionButtons>
    </>
  )
}

export default App
