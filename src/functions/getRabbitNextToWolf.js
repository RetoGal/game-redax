import getNeighbouringCoordinates from './getNeighbouringCoordinates'

const getRabbitNextToWolf = (arr, [x, y]) => {
  const sidesWolf = getNeighbouringCoordinates(arr, [x, y])
  sidesWolf.forEach((freeCell) => {
    if (arr[x][y] === 'rabbit') {
      const [x, y] = freeCell
    }
  })
}

export default getRabbitNextToWolf
