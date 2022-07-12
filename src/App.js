import { useSelector, useDispatch } from 'react-redux'
import { DirectionButons, DivForDirectionButtons } from './styled'
import { StartGameButton, SelectGameBoard } from './styled'
import { useState } from 'react'
import createGameBoardMatrix from './functions/setCharacterOnFreePosition'
import GameWrapper from './wrapper/gameWrapper'
import gameMovement from './functions/gameMove'

const buttonsDirection = ['up', 'right', 'left', 'down']
const SELECT_OPTION_VALUE = [5, 7, 10]

const getGameArray = (state) => state.gameState.gameArr

const App = () => {
  const [optionValue, setOptionValue] = useState(SELECT_OPTION_VALUE[0])
  const selectChange = (e) => setOptionValue(parseInt(e.target.value))
  const currentGameState = useSelector(getGameArray)
  const dispatch = useDispatch()

  return (
    <>
      <StartGameButton
        key={'startBtn'}
        onClick={() => {
          dispatch({
            type: 'change-game-state',
            payload: {
              gameArr: createGameBoardMatrix(optionValue),
            },
          })
        }}
      >
        START
      </StartGameButton>
      <SelectGameBoard onChange={selectChange}>
        {SELECT_OPTION_VALUE.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}*{optionValue}
          </option>
        ))}
      </SelectGameBoard>

      <GameWrapper currentGameState={currentGameState} />

      <DivForDirectionButtons>
        {buttonsDirection.map((direction) => {
          return (
            <DirectionButons
              direction={direction}
              key={direction}
              onClick={() =>
                dispatch({
                  type: 'change-game-state',
                  payload: {
                    gameArr: gameMovement(direction, [...currentGameState]),
                  },
                })
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
