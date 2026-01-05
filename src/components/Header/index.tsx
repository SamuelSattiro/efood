import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import fundoHeader from '../../assets/images/fundo.png'
import { Head, Links, LinkCart } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
        <div className="CartItem">
          <LinkCart onClick={openCart}>
            {items.length} Produto(s) no Carrinho
          </LinkCart>
        </div>
      </div>
    </Head>
  )
}

export default Header
