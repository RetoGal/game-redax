import { CHARACTER_PARAMS } from '../functions/objCaracterParams'
import { ImgCharacters } from './stylesForGameBoard'
const FREE_CELL = 0

const GameBoard = (props) => {

  if (props.cell === FREE_CELL) {
    return
  }
  let imgSrc
  if (props.cell === CHARACTER_PARAMS.rabbit.name) {
    imgSrc = CHARACTER_PARAMS.rabbit.src
  } else if (props.cell === CHARACTER_PARAMS.wolf.name) {
    imgSrc = CHARACTER_PARAMS.wolf.src
  } else if (props.cell === CHARACTER_PARAMS.ban.name) {
    imgSrc = CHARACTER_PARAMS.ban.src
  } else if (props.cell === CHARACTER_PARAMS.home.name) {
    imgSrc = CHARACTER_PARAMS.home.src
  }

  return <ImgCharacters src={imgSrc} />
}
export default GameBoard
