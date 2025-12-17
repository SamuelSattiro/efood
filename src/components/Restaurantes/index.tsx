import { Restaurante } from '../../models/Restaurante'
import Rest from '../Restaurante'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantesList = ({ restaurantes }: Props) => {
  const getRestauranteTags = (restaurante: Restaurante) => {
    const tags = []
    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }
    if (restaurante.tipo) {
      tags.push(`${restaurante.tipo}`)
    }
    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((restaurante) => (
            <Rest
              key={restaurante.id}
              description={restaurante.descricao}
              image={restaurante.capa}
              infos={getRestauranteTags(restaurante)}
              stars={restaurante.avaliacao}
              title={restaurante.titulo}
              id={restaurante.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantesList
