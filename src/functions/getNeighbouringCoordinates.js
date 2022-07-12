const isInRange = (arr, [x, y]) =>
  x >= 0 && x < arr.length && y >= 0 && y < arr.length

const getNeighbouringCoordinates = (arr, [x, y]) => {
  const cells = [
    [x - 1, y],
    [x + 1, y],
    [x, y + 1],
    [x, y - 1],
  ]
  return cells.filter((cell) => isInRange(arr, cell))
}

export default getNeighbouringCoordinates
