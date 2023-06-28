import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameComponentItem from '../GameComponentItem'
import 'reactjs-popup/dist/index.css'

import {
  GameContainer,
  ScoreContainer,
  GameHeading,
  GameComponents,
  ScoreCard,
  PlayingButton,
  GameComponentImg,
  RulesButton,
  GameResultContainer,
  IndividualResultContainer,
  ResultContainer,
  PlayAgainButton,
  Plyer,
  GameResult,
  PlayingItemChoicesList,
  RulesImage,
} from './StyledComponents'

class Game extends Component {
  state = {
    isGamePlayed: false,
    myResult: '',
    opponentResult: '',
    finalResult: '',
    score: 0,
  }

  onMyChoice = choice => {
    const {score} = this.state

    const {choicesList} = this.props

    const randomNum = Math.floor(Math.random() * 3)

    const opponentChoice = choicesList[randomNum].id

    let finalResult
    if (choice === 'PAPER' && opponentChoice === 'ROCK') {
      finalResult = 'YOU WON'
    } else if (choice === 'SCISSORS' && opponentChoice === 'ROCK') {
      finalResult = 'YOU LOSE'
    } else if (choice === 'ROCK' && opponentChoice === 'PAPER') {
      finalResult = 'YOU LOSE'
    } else if (choice === 'SCISSORS' && opponentChoice === 'PAPER') {
      finalResult = 'YOU WON'
    } else if (choice === 'ROCK' && opponentChoice === 'SCISSORS') {
      finalResult = 'YOU WON'
    } else if (choice === 'PAPER' && opponentChoice === 'SCISSORS') {
      finalResult = 'YOU LOSE'
    } else {
      finalResult = 'IT IS DRAW'
    }

    let updatedScore
    if (finalResult === 'YOU WON') {
      updatedScore = score + 1
    } else if (finalResult === 'YOU LOSE') {
      updatedScore = score - 1
    } else {
      updatedScore = score
    }

    this.setState({
      isGamePlayed: true,
      myResult: choice,
      opponentResult: opponentChoice,
      finalResult,
      score: updatedScore,
    })
  }

  onClickPlayAgain = () => {
    this.setState({isGamePlayed: false})
  }

  renderPlayingView = () => {
    const {choicesList} = this.props

    return (
      <PlayingItemChoicesList>
        {choicesList.map(eachChoice => (
          <GameComponentItem
            choice={eachChoice}
            key={eachChoice.id}
            onMyChoice={this.onMyChoice}
          />
        ))}
      </PlayingItemChoicesList>
    )
  }

  renderResultView = () => {
    const {myResult, opponentResult, finalResult} = this.state
    const {choicesList} = this.props

    console.log(myResult, opponentResult)

    const myResultImg = choicesList.filter(choice => choice.id === myResult)
    const opponentResultImg = choicesList.filter(
      choice => choice.id === opponentResult,
    )

    return (
      <GameResultContainer>
        <ResultContainer>
          <IndividualResultContainer>
            <Plyer>YOU</Plyer>
            <PlayingButton type="button">
              <GameComponentImg
                src={myResultImg[0].imageUrl}
                alt="your choice"
              />
            </PlayingButton>
          </IndividualResultContainer>
          <IndividualResultContainer>
            <Plyer>OPPONENT</Plyer>
            <PlayingButton type="button">
              <GameComponentImg
                src={opponentResultImg[0].imageUrl}
                alt="opponent choice"
              />
            </PlayingButton>
          </IndividualResultContainer>
        </ResultContainer>
        <GameResult>{finalResult}</GameResult>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultContainer>
    )
  }

  render() {
    const {isGamePlayed, score} = this.state

    return (
      <GameContainer>
        <ScoreContainer>
          <div>
            <GameHeading>ROCK PAPER SCISSORS</GameHeading>
          </div>
          <ScoreCard>
            <GameComponents>Score</GameComponents>
            <GameComponents score>{score}</GameComponents>
          </ScoreCard>
        </ScoreContainer>
        {isGamePlayed ? this.renderResultView() : this.renderPlayingView()}
        <div>
          <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
            {close => (
              <div>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <button type="button" onClick={() => close()}>
                  <RiCloseLine />
                </button>
              </div>
            )}
          </Popup>
        </div>
      </GameContainer>
    )
  }
}

export default Game
