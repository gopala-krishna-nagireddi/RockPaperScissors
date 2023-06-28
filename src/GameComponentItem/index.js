import {
  PlayingItemChoice,
  PlayingItemImg,
  PlayingButton,
} from './StyledComponents'

const GameComponentItem = props => {
  const {choice, onMyChoice} = props
  const {id, imageUrl} = choice

  let attribute
  if (id === 'ROCK') {
    attribute = 'rockButton'
  } else if (id === 'SCISSORS') {
    attribute = 'scissorsButton'
  } else {
    attribute = 'paperButton'
  }

  const onClickComponent = () => {
    onMyChoice(id)
  }
  return (
    <PlayingItemChoice>
      <PlayingButton onClick={onClickComponent} data-testid={attribute}>
        <PlayingItemImg src={imageUrl} alt={id} />
      </PlayingButton>
    </PlayingItemChoice>
  )
}

export default GameComponentItem
