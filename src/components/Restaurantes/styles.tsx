import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const Container = styled.div`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 80px;
  margin-bottom: 120px;
  align-items: stretch;

  @media (max-width: ${breakpoint.desktop}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
