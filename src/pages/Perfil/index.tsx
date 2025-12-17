import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Produtos from '../../components/Produtos'

import { useEffect, useState } from 'react'
import { Restaurante } from '../../models/Restaurante'
import InfoModal from '../../components/InfoModal'
import { Product } from '../../models/Product'

const Perfil = () => {
  const [modalAberto, setModalAberto] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(
    null
  )

  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <Header />
      <Banner banner={restaurante} />
      <Produtos
        produtos={restaurante.cardapio}
        aberto={modalAberto}
        onProdutoClick={(produto) => {
          setProdutoSelecionado(produto)
          setModalAberto(true)
        }}
      />
      {modalAberto && produtoSelecionado && (
        <InfoModal
          produto={produtoSelecionado}
          aberto={modalAberto}
          fecharModal={() => setModalAberto(false)}
        />
      )}
    </>
  )
}

export default Perfil
