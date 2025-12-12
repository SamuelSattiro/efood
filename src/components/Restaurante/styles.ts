import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.fundo3};
  position: relative;
  width: 472px;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
    object-position: center;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 22px;
  right: 20px;
`
export const CardSections = styled.div`
  border: 2px solid ${cores.fonte};
  border-top: none;
`
export const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }

  .nota {
    display: flex;
    align-items: center;
    gap: 4px;

    ${TagContainer} {
      background-color: transparent;
      color: ${cores.fonte};
      font-size: 18px;
      padding: 2px 0 0 0;
    }
  }
`
export const Nome = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-bottom: 8px;
  padding-left: 8px;
  padding-top: 8px;
`
export const Descricao = styled.p`
  padding: 8px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
// export const Infos = styled.div`
//   position: absolute;
//   top: 16px;
//   right: 16px;
// `
