import React from 'react'
import GameCard from '../game-card/game-card.component'

import { GameBarContainer, GameBarTitle, GamesContainer } from './game-bar.styles'

const GameBar = ({ games }) => {

    return (

        <GameBarContainer>

            <GameBarTitle>Common Community Games</GameBarTitle>
            <GamesContainer>
                {games.map(game => <GameCard title={game.gameName} img={game.gameIcon.file.url} key={game.gameName} />)}
            </GamesContainer>

        </GameBarContainer>

    )
}

export default GameBar

