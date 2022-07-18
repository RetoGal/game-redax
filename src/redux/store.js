import { createStore } from 'redux'
import {
  CREATE_NEW_GAME_BOARD,
  SET_GAME_BOARD,
  CHANGE_CURRENT_GAME_STATE,
} from '../config'
const initialState = []

export const gameNewBoard = {
  matrix: [],
  theGameContinues: false,
  theResultOfTheGame: '',
  gameBoardNumber: '',
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
  return [...state]
}

const gameBoardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_GAME_BOARD:
      return [...state, { ...gameNewBoard }]
      break
    case SET_GAME_BOARD:
      return startGame(state, action)
      break
    case CHANGE_CURRENT_GAME_STATE:
      return changeCurrentGameState(state, action)
      break
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
