import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: ${cores.pretoTrans};
`
export const CartContainer = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.fonte};
  color: ${cores.fundo};
  padding: 40px 16px 0 16px;
  z-index: 1;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    display: block;
    max-width: 100%;
    width: 100%;
    background-color: ${cores.fundo2};
    color: ${cores.fonte};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin: 0;
  }

  .paragrafos {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    font-weight: bold;
    font-size: 14px;
  }
`
export const CartProduto = styled.li`
  background: ${cores.fundo};
  color: ${cores.fonte};
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    object-position: center;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 14px;
    font-style: normal;
  }

  img:last-of-type {
    float: right;
  }

  div:last-of-type {
    flex: 1;
  }

  button {
    background: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
