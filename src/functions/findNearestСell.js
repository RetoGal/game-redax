import getSidesLengthThreeAngle from './getSidesLengthThreeAngle'
import getFreeBoxNextToWolf from './getFreeBoxNextToWolf'

const findNearestСell = (arr, [x, y]) => {
  const lengthCell = getSidesLengthThreeAngle(arr, [x, y])
  const nearestСell = getFreeBoxNextToWolf(arr, [x, y])
  const min = Math.min(...lengthCell)
  const index = lengthCell.indexOf(min)
  return nearestСell[index]
}

export default findNearestСell
