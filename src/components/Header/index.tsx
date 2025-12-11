import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import fundoHeader from '../../assets/images/fundo.png'
import { Head, Links } from './styles'

const Header = () => (
  <Head style={{ backgroundImage: `url(${fundoHeader})` }}>
    <div className="container">
      <div>
        <Link to="/">
          <Links>Restaurantes</Links>
        </Link>
      </div>
      <div>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
      </div>
      <div>
        <Links>0 Produto(s) no Carrinho</Links>
      </div>
    </div>
  </Head>
)

export default Header
