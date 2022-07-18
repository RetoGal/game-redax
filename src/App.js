import { useSelector, useDispatch } from 'react-redux'
import { DirectionButons, DivForDirectionButtons } from './styled'
import { StartGameButton, SelectGameBoard } from './styled'
import { useState } from 'react'
import createGameBoardMatrix from './functions/setCharacterOnFreePosition'
import { GameWrapper } from './wrapper/gameWrapper'
import gameMovement from './functions/gameMove'
import GameStatusMessage from './gameMessage/gameMessage'
import { NewGameAreaButton } from './styled'
import {
  CREATE_NEW_GAME_BOARD,
  SET_GAME_BOARD,
  CHANGE_CURRENT_GAME_STATE,
  BUTTONS_DIRECTION,
  SELECT_OPTION_VALUE,
} from './config'

const getGameState = (state) => state

const App = () => {
  const currentGameState = useSelector(getGameState)

  const dispatch = useDispatch()
  const [optionValue, setOptionValue] = useState(SELECT_OPTION_VALUE[0])
  const selectChange = (e) => setOptionValue(parseInt(e.target.value))
  const createNewGameBoard = () => {
    dispatch({
      type: CREATE_NEW_GAME_BOARD,
    })
  }

  return (
    <>
      <NewGameAreaButton
        onClick={() => {
          createNewGameBoard()
        }}
      >
        New Game
      </NewGameAreaButton>
      {currentGameState.map((gameState, i) => {
        return (
          <div key={i}>
            <SelectGameBoard key={i} onChange={selectChange}>
              {SELECT_OPTION_VALUE.map((optionValue, index) => (
                <option key={index} value={optionValue}>
                  {optionValue}*{optionValue}
                </option>
              ))}
            </SelectGameBoard>
            <StartGameButton
              key={i}
              onClick={() => {
                dispatch({
                  type: SET_GAME_BOARD,
                  payload: {
                    matrix: createGameBoardMatrix(optionValue),
                    theGameContinues: true,
                    theResultOfTheGame: '',
                    gameBoardNumber: i,
                  },
                })
              }}
            >
              START
            </StartGameButton>

            {currentGameState[i].theGameContinues === false ? (
              <GameStatusMessage
                currentGameState={currentGameState[i]}
                key={i}
              />
            ) : (
              <GameWrapper currentGameState={currentGameState[i]} key={i} />
            )}

            <DivForDirectionButtons key={i}>
              {BUTTONS_DIRECTION.map((direction, u) => {
                return (
                  <DirectionButons
                    direction={direction}
                    key={u}
                    onClick={() => {
                      const game = gameMovement(direction, { ...gameState })

                      dispatch({
                        type: CHANGE_CURRENT_GAME_STATE,
                        payload: {
                          matrix: game.matrix,
                          theGameContinues: game.theGameContinues,
                          theResultOfTheGame: game.theResultOfTheGame,
                          gameBoardNumber: game.gameBoardNumber,
                        },
                      })
                    }}
                  >
                    {direction}
                  </DirectionButons>
                )
              })}
            </DivForDirectionButtons>
          </div>
        )
      })}
    </>
  )
}

export default App
