import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${cores.fonte};
  color: ${cores.fundo2};
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    object-position: center;
  }

  &.visivel {
    display: flex;
    border-radius: 4px;

    img {
      border-radius: 4px;
    }
  }

  ${ButtonContainer} {
    height: 24px;
    background-color: ${cores.fundo2};
    color: ${cores.fonte};
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`
export const Titulo = styled.h3`
  font-size: 16px;
  margin-top: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
  margin-top: 8px;
  flex: 1;
`
