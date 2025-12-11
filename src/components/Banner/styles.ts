import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

export const Imagem = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .container {
    display: block;
    z-index: 2;
  }
`
export const TagOne = styled.div`
  ${TagContainer} {
    position: absolute;
    top: 24px;
    z-index: 2;
    background-color: transparent;
    font-size: 32px;
    font-weight: lighter;
  }
`
export const TagTwo = styled.div`
  ${TagContainer} {
    position: absolute;
    top: 200px;
    z-index: 2;
    background-color: transparent;
    color: ${cores.fundo3};
    font-size: 32px;
  }
`
