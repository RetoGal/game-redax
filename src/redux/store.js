import { createStore } from 'redux'
import createGameBoardMatrix from '../functions/setCharacterOnFreePosition'

const store = createStore(
  function (state, action) {
    if (action.type === 'change-game-state') {
      return {
        ...state,
        gameState: {
          gameArr: action.payload.gameArr,
        },
      }
    }
    return state
  },
  {
    gameState: {
      gameArr: createGameBoardMatrix(5),
    },
  }
)

export default store
