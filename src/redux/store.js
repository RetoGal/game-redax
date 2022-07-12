import { createStore } from 'redux'

const initialState = {
  gameState: {
    gameArr: [],
  },
}
const reducer = (state, action) => {
  if (action.type === 'change-game-state') {
    return {
      ...state,
      gameState: {
        gameArr: action.payload.gameArr,
      },
    }
  }
  return state
}

const store = createStore(reducer, initialState)

export default store
