import getNeighbouringCoordinates from './getNeighbouringCoordinates'
import { CHARACTER_PARAMS } from './objCaracterParams'

const getRabbitNextToWolf = (arr, [x, y]) => {
  const sidesWolf = getNeighbouringCoordinates(arr, [x, y])
  sidesWolf.forEach((freeCell) => {
    const [x, y] = freeCell
    if (arr[x][y] === CHARACTER_PARAMS.rabbit.name) {
      alert('gameOver')
    }
  })
}
export default getRabbitNextToWolf
