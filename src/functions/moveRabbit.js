import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import { CHARACTER_PARAMS } from './objCaracterParams'
import moveWolvesOnNewBox from './moveWolvesOnNewBox'

const FREE_CELL = 0
const moveRabbit = (arr, x, y) => {
  const cordinateOfRabbit = getCordinatesOfCharacter(
    arr,
    CHARACTER_PARAMS.rabbit.name
  )
  const [rabbitX, rabbitY] = cordinateOfRabbit[0]
  arr[rabbitX][rabbitY] = FREE_CELL
  if (arr[x][y] === FREE_CELL) {
    arr[x][y] = CHARACTER_PARAMS.rabbit.name
  } else if (arr[x][y] === CHARACTER_PARAMS.wolf.name) {
    alert('gameOver')
  } else if (arr[x][y] === CHARACTER_PARAMS.home.name) {
    alert('youWon')
  }

  moveWolvesOnNewBox(arr)
  return arr
}

export default moveRabbit
