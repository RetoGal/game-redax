const getCordinatesOfCharacter = (gameState, character) => {
  const matrix = gameState.matrix
  const cordsCharacter = []
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      matrix[x][y] === character && cordsCharacter.push([x, y])
    }
  }
  return cordsCharacter
}
export default getCordinatesOfCharacter
