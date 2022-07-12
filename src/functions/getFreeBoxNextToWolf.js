import getNeighbouringCoordinates from './getNeighbouringCoordinates'
const FREE_CELL = 0

const getFreeBoxNextToWolf = (arr, [x, y]) => {
  const sidesWolf = getNeighbouringCoordinates(arr, [x, y])
  const result = []
  sidesWolf.forEach((freeCell) => {
    const [x, y] = freeCell
    arr[x][y] === FREE_CELL && result.push(freeCell)
  })
  return result
}

export default getFreeBoxNextToWolf
