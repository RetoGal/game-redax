import { createStore } from 'redux'

const initialState = {
  gameState: {
    matrix: [],
    theGameContinues: '',
    theResultOfTheGame: '',
  },
}
const reducer = (state, action) => {
  if (action.type === 'change-game-state') {
    return {
      ...state,
      gameState: {
        matrix: action.payload.matrix,
        theGameContinues : action.payload.theGameContinues,
        theResultOfTheGame : action.payload.theResultOfTheGame,
      },
    }
  }
  return state
}

const store = createStore(reducer, initialState,window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined)

export default store
