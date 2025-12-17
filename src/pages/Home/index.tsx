import { useEffect, useState } from 'react'
import RestaurantesList from '../../components/Restaurantes'
import Hero from '../../components/Hero'
import { Restaurante } from '../../models/Restaurante'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Home = () => {
  const [restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  })

  return (
    <>
      <Hero />
      <RestaurantesList restaurantes={restaurante} />
    </>
  )
}

export default Home
