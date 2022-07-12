import { createStore } from 'redux'
import createGameBoardMatrix from '../functions/setCharacterOnFreePosition'
const store = createStore(
  function (state, action) {
    if (action.type === 'game-state-change') {
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
