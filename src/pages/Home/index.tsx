import RestaurantesList from '../../components/Restaurantes'
import Hero from '../../components/Hero'
import { useGetFeatureRestaurantesQuery } from '../../services/api'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Home = () => {
  const { data: restaurante } = useGetFeatureRestaurantesQuery()

  if (restaurante) {
    return (
      <>
        <Hero />
        <RestaurantesList restaurantes={restaurante} />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
