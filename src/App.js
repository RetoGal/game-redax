import { useSelector, useDispatch } from 'react-redux'
import { DirectionButons, DivForDirectionButtons } from './styled'
import { StartGameButton, SelectGameBoard } from './styled'
import { useState } from 'react'
import createGameBoardMatrix from './functions/setCharacterOnFreePosition'
import { GameWrapper } from './wrapper/gameWrapper'
import gameMovement from './functions/gameMove'
import GameStatusMessage from './gameMessage/gameMessage'
import { NewGameAreaButton } from './styled'
import { gameNewBoard } from './redux/store'

const buttonsDirection = ['up', 'right', 'left', 'down']
const SELECT_OPTION_VALUE = [5, 7, 10]

const getGameState = (state) => state

const App = () => {
  const currentGameState = useSelector(getGameState)
  console.log(currentGameState)
  const dispatch = useDispatch()
  const [optionValue, setOptionValue] = useState(SELECT_OPTION_VALUE[0])
  const selectChange = (e) => setOptionValue(parseInt(e.target.value))
  const createNewGameBoard = () => {
    dispatch({
      type: 'create-new-game-board',
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
              {SELECT_OPTION_VALUE.map((optionValue) => (
                <option key={optionValue} value={optionValue}>
                  {optionValue}*{optionValue}
                </option>
              ))}
            </SelectGameBoard>
            <StartGameButton
              key={i}
              onClick={() => {
                dispatch({
                  type: 'set-game-board',
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
        <GameStatusMessage currentGameState={currentGameState[i]} />
      ) : (
        <GameWrapper currentGameState={currentGameState[i]} />
      )}

        

            <DivForDirectionButtons>
              {buttonsDirection.map((direction) => {
                return (
                  <DirectionButons
                    direction={direction}
                    key={direction}
                    onClick={() => {
                      const game = gameMovement(direction, { ...gameState })
  
                      dispatch({
                        type: 'change-current-game-state',
                        payload: {
                          matrix: game.matrix,
                          theGameContinues: game.theGameContinues,
                          theResultOfTheGame: game.theResultOfTheGame,
                          gameBoardNumber : game.gameBoardNumber
                        },
                      })
                    }
                     
                    }
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
