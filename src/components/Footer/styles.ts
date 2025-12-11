import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.fundo};
  font-size: 14px;
  width: 100%;
  height: 298px;
  display: block;
  text-align: center;

  img {
    margin-top: 40px;
  }
`
export const FooterSection = styled.div`
  font-size: 10px;
  font-weight: 400;
  width: 480px;
  margin: 70px auto;
`
export const Links = styled.ul`
  display: flex;
  justify-content: center;
`
export const LinkRede = styled.a`
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`
