import Produto from '../Produto'
import { List } from './styles'
import Products from '../../models/Products'

export type Props = {
  produtos: Products[]
}

const Produtos = ({ produtos }: Props) => (
  <div>
    <div className="container">
      <List>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            description={produto.description}
            image={produto.image}
            title={produto.title}
          />
        ))}
      </List>
    </div>
  </div>
)

export default Produtos
