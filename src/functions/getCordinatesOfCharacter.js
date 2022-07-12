const getCordinatesOfCharacter = (arr, character) => {
  const cordsCharacter = []
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {
      arr[x][y] === character && cordsCharacter.push([x, y])
    }
  }
  return cordsCharacter
}

export default getCordinatesOfCharacter
