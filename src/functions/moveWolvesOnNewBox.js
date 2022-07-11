import getCordinatesOfCharacter from './getCordinatesOfCharacter'
import findNearestСell from './findNearestСell'
import getRabbitNextToWolf from './getRabbitNextToWolf'
import { CHARACTER_PARAMS } from './objCaracterParams'
const FREE_CELL = 0

const moveWolvesOnNewBox = (arr) => {
  const sideWolves = getCordinatesOfCharacter(arr, CHARACTER_PARAMS.wolf.name)
  sideWolves.forEach((cordinateWolves) => {
    const [XnearestСell, YnearestСell] = findNearestСell(arr, cordinateWolves)
    const [Xwolves, Ywolves] = cordinateWolves
    arr[Xwolves][Ywolves] = FREE_CELL
    arr[XnearestСell][YnearestСell] = CHARACTER_PARAMS.wolf.name
    getRabbitNextToWolf(arr, cordinateWolves)
    return arr
  })
}

export default moveWolvesOnNewBox
