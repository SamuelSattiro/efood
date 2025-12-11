import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Produtos from '../../components/Produtos'

import pizza from '../../assets/images/pizza.png'
import massa from '../../assets/images/massa.png'
import Products from '../../models/Products'
import Banners from '../../models/Banners'

const bannerTag: Banners[] = [
  {
    image: massa,
    id: 1,
    type: 'Italiana',
    title: 'La Dolce Vita Trattoria'
  }
]

const produtos: Products[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Margherita',
    image: pizza
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Margherita',
    image: pizza
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Margherita',
    image: pizza
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Margherita',
    image: pizza
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Margherita',
    image: pizza
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Margherita',
    image: pizza
  }
]

const Perfil = () => (
  <div>
    <Header />
    <Banner banners={bannerTag} />
    <Produtos produtos={produtos} />
  </div>
)

export default Perfil
