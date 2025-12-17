import Produto from '../Produto'
import { List } from './styles'
import { Product } from '../../models/Product'

export type Props = {
  produtos: Product[]
  onProdutoClick: (produto: Product) => void
  aberto: boolean
}

const Produtos = ({ produtos, onProdutoClick, aberto }: Props) => (
  <div>
    <div className="container">
      <List>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Produto
              description={produto.descricao}
              image={produto.foto}
              title={produto.nome}
              onClick={() => onProdutoClick(produto)}
              aberto={aberto}
            />
          </li>
        ))}
      </List>
    </div>
  </div>
)

export default Produtos
