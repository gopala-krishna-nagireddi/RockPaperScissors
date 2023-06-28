import Styled from 'styled-components'

export const GameContainer = Styled.div`
    background-color: #223a5f;
    min-height: 100vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px){
        padding: 200px;
    }
    @media screen and (min-width: 1024px){
        padding: 80px 300px;
    }
    @media screen and (min-width: 1280px){
        padding: 100px 420px;
    }
`
export const ScoreContainer = Styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border: 3px solid #ffffff;
    border-radius: 12px;
`

export const GameHeading = Styled.h1`
    font-size: 28px;
    color: #ffffff;
    font-family: "Bree Serif";
    border: 1px solid red;
`

export const GameComponents = Styled.p`
    color: ${props => props.score && '#223a5f'};
    font-size: ${props => (props.score ? '36px' : '24px')};
    font-weight: ${props => props.score && 'bold'};
    font-family: ${props => (props.score ? 'Roboto' : 'Bree Serif')};
    margin: 0px;
`
export const ScoreCard = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 16px;
    border-radius: 10px;
`

export const RulesButton = Styled.button`
    background-color: #ffffff;
    color: #223a5f;
    align-self: flex-end;
    font-size: 16px;
    font-family: "Bree Serif";
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
`

export const RulesImage = Styled.img`
    width: 200px;
    height: 200px;
`

export const GameResultContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
`

export const ResultContainer = Styled.div`
    display: flex;
`

export const IndividualResultContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const PlayAgainButton = Styled.button`
    font-size: 18px;
    padding: 10px 20px;
    color: #223a5f;
    background-color: #ffffff;
    font-family: "Bree Serif";
    border: none;
    border-radius: 10px;
`

export const Plyer = Styled.p`
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
`
export const GameResult = Styled.p`
    color: #ffffff;
    font-size: 32px;
    font-weight: bold;
`
export const GameComponentImg = Styled.img`
    width: 120px;
    height: 120px;
`
export const PlayingButton = Styled.button`
    border: none;
    border-radius: 50%;
    margin: 10px;
`
export const PlayingItemChoicesList = Styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 80px 0;
`
