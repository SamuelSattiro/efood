import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 60px 0 120px 0;

  @media (max-width: ${breakpoint.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
`
