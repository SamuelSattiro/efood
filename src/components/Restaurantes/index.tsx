import Restaurante from '../Restaurante'
import { Container, List } from './styles'
import Restaurants from '../../models/Restaurants'

export type Props = {
  restaurantes: Restaurants[]
}

const RestaurantesList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            description={restaurante.description}
            image={restaurante.image}
            infos={restaurante.infos}
            stars={restaurante.stars}
            title={restaurante.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantesList
