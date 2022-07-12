import getFreeBoxNextToWolf from './getFreeBoxNextToWolf'
import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import { calculateDistance } from './calculateDistance'
import { CHARACTER_PARAMS } from './objCaracterParams'

const getSidesLengthThreeAngle = (arr, [x, y]) => {
  const sidesWolf = getFreeBoxNextToWolf(arr, [x, y])
  const cordRabbit = getCordinatesOfCharacter(arr, CHARACTER_PARAMS.rabbit.name)
  return sidesWolf.map((item) => calculateDistance(item, cordRabbit[0]))
}

export default getSidesLengthThreeAngle
