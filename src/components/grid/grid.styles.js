import styled from "styled-components"

const columns = ({ columns }) => (columns ? columns : `1fr`)
const rows = ({ rows }) => (rows ? rows : `1fr`)

export const GridContainer = styled.nav`
   display: grid;
   grid-template-columns: ${columns};
   grid-template-rows: ${rows};
   grid-gap: 50px
`