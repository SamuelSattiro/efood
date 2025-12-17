import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Modal = styled.div`
  color: ${cores.fundo3};
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: ${cores.pretoTrans};
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${cores.fonte};
  width: 1024px;
  height: 344px;
  display: block;

  .fechar {
    display: flex;
    justify-content: flex-end;
    margin: 8px;
    max-width: 100%;
  }
`
export const ModalItems = styled.div`
  display: flex;

  img {
    margin: 0 24px 18px 32px;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
    max-width: 656px;
  }

  ${ButtonContainer} {
    background-color: ${cores.fundo};
    color: ${cores.fonte};
    margin: 16px 0;
  }
`
