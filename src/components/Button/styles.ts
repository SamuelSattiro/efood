import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.fonte};
  color: ${cores.fundo2};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  border: none;
  cursor: pointer;
  margin: 8px;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.fonte};
  color: ${cores.fundo2};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  border: none;
  cursor: pointer;
  margin: 8px;
`
