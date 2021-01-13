import React from 'react'

import { GridContainer } from './grid.styles'

const GridComponent = ({ children, columns, rows }) => {

    return (
        <GridContainer columns={columns} rows={rows}>
            {children}
        </GridContainer>
    )
}

export default GridComponent

