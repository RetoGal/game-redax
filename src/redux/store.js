import { createStore } from 'redux'
const initialState = []

export const gameNewBoard = {
  matrix: [],
  theGameContinues: false,
  theResultOfTheGame: '',
  gameBoardNumber: 5,
}

const startGame = (state, action) => {
  const { gameBoardNumber } = action.payload
  state[gameBoardNumber] = {
    ...state[gameBoardNumber],
    matrix: action.payload.matrix,
    theGameContinues: action.payload.theGameContinues,
    theResultOfTheGame: action.payload.theResultOfTheGame,
    gameBoardNumber: action.payload.gameBoardNumber,
  }

  return [...state]
}

const changeCurrentGameState = (state, action) => {
  const { gameBoardNumber } = action.payload
  state[gameBoardNumber] = {
    ...state[gameBoardNumber],
    matrix: action.payload.matrix,
    theGameContinues: action.payload.theGameContinues,
    theResultOfTheGame: action.payload.theResultOfTheGame,
    gameBoardNumber: action.payload.gameBoardNumber,
  }
}

const gameBoardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'create-new-game-board':
      return [...state, { ...gameNewBoard }]
      break
    case 'set-game-board':
      return startGame(state, action)
      break
    case 'change-current-game-state':
      changeCurrentGameState(state, action)
    default:
      return [...state]
  }
}

const store = createStore(
  gameBoardsReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

export default store
