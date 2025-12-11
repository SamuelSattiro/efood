import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import x from '../../assets/images/x.svg'
import { Container, Links, FooterSection, LinkRede } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Container>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <div>
        <Links>
          <li>
            <LinkRede>
              <img src={instagram} alt="instagram" />
            </LinkRede>
          </li>
          <li>
            <LinkRede>
              <img src={facebook} alt="facebook" />
            </LinkRede>
          </li>
          <li>
            <LinkRede>
              <img src={x} alt="x" />
            </LinkRede>
          </li>
        </Links>
      </div>
      <FooterSection>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </p>
      </FooterSection>
    </div>
  </Container>
)

export default Footer
