import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import gameMovement from './functions/gameMove'

function App() {
  const status = useSelector(function (state) {
    console.log(state)
      return state.gameState.gameArr
  })

  const dispatch = useDispatch()
  return (
    <>
      <h2> {status}</h2>
      <button
        onClick={() => {
          dispatch({
            type: 'game-state-change',
             payload: {
              gameArr: gameMovement('right', status),
            },
          })
        }}
      >
        Right
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'game-state-change',
             payload: {
              gameArr: gameMovement('left', status),
            },
          })
        }}
      >
        Left
      </button>


      <button
        onClick={() => {
          dispatch({
            type: 'game-state-change',
             payload: {
              gameArr: gameMovement('up', status),
            },
          })
        }}
      >
        UP
      </button>

      <button
        onClick={() => {
          dispatch({
            type: 'game-state-change',
             payload: {
              gameArr: gameMovement('down', status),
            },
          })
        }}
      >
        DOWN
      </button>
    </>
  )
}

export default App
