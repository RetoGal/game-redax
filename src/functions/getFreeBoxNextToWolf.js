import getNeighbouringCoordinates from './getNeighbouringCoordinates'
const FREE_CELL = 0

function getFreeBoxNextToWolf ( gameState, [x, y] ) {
  const matrix = gameState.matrix
  const sidesWolf = getNeighbouringCoordinates( gameState, [x, y] )
  const result = []
  sidesWolf.forEach( freeCell => {
   const[x, y] = freeCell

    if ( gameState.theGameContinues === false ) {
      return
    } 
    matrix[x][y] === FREE_CELL && result.push(freeCell)
 })
  return result
}
export default getFreeBoxNextToWolf
