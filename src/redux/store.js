import { createStore } from 'redux'

const initialState = {
  gameState: {
    matrix: [],
    theGameContinues: false,
    theResultOfTheGame: '',
  },
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'set-game-state':
      return {
        ...state,
        gameState: {
          matrix: action.payload.matrix,
          theGameContinues: action.payload.theGameContinues,
          theResultOfTheGame: action.payload.theResultOfTheGame,
        },
      }
      break
    case 'change-current-game-state':
      return {
        ...state,
        gameState: {
          matrix: action.payload.matrix,
          theGameContinues: action.payload.theGameContinues,
          theResultOfTheGame: action.payload.theResultOfTheGame,
        },
      }
      break
      
    default:
  }

  return state
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)



export default store
