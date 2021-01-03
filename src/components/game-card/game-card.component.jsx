import React from 'react'

import { GameCardContainer, GameCardIcon, GameCardTitle } from './game-card.styles'

const GameCard = ({ title, img }) => {

    return (
        <GameCardContainer>
            <GameCardIcon src={img} alt={title} />
            <GameCardTitle>{title}</GameCardTitle>
        </GameCardContainer>
    )
}

export default GameCard

