import { CHARACTER_PARAMS } from './objCaracterParams'
import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import moveRabbit from './moveRabbit'
import moveWolvesOnNewBox from './moveWolvesOnNewBox'

const gameMovement = (direction, array) => {
  const cordinateOfCharacter = getCordinatesOfCharacter(
    array,
    CHARACTER_PARAMS.rabbit.name
  )
  const [x, y] = cordinateOfCharacter[0]
  let newX = x
  let newY = y
  if (direction === 'left') {
    y === 0 ? (newY = array.length - 1) : (newY = y - 1)
  } else if (direction === 'right') {
    y === array.length - 1 ? (newY = 0) : (newY = y + 1)
  } else if (direction === 'up') {
    x === 0 ? (newX = array.length - 1) : (newX = x - 1)
  } else if (direction === 'down') {
    x === array.length - 1 ? (newX = 0) : (newX = x + 1)
  }

  return moveRabbit(array, newX, newY)
}

export default gameMovement
