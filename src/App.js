import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import gameMovement from './functions/gameMove'
import { DirectionButons, DivForDirectionButtons} from './styled'

const buttonsDirection = ['up', 'right', 'left', 'down']

function App() {
  const status = useSelector(function (state) {
    console.log(state)
    return state.gameState.gameArr
  })

  const dispatch = useDispatch()
  return (
    <>
      <h2> {status}</h2>
      <DivForDirectionButtons>
        {buttonsDirection.map((direction) => {
          return (
            <DirectionButons
              direction={direction}
              key={direction}
              onClick={() =>
                dispatch({
                  type: 'game-state-change',
                  payload: {
                    gameArr: gameMovement(direction, status),
                  },
                })
              }
            >
              {direction}
            </DirectionButons>
          )
        })}
      </DivForDirectionButtons>
    </>
  )
}

export default App
