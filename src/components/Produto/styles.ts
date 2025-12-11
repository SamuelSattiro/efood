import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${cores.fonte};
  color: ${cores.fundo2};
  display: block;
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
`
export const Botao = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.fundo2};
  color: ${cores.fonte};
  border: none;
  margin-top: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`
