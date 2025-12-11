import { Botao, Card, Descricao, Titulo } from './styles'

export type Props = {
  image: string
  title: string
  description: string
}

const Produto = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao type="submit">Adicionar ao carrinho</Botao>
  </Card>
)

export default Produto
