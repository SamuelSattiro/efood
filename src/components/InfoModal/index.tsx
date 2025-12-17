import fechar from '../../assets/images/fechar.png'
import { Product } from '../../models/Product'
import { formataPreco } from '../../pages/Home'
import Button from '../Button'
import { Modal, ModalContent, ModalItems } from './styles'

type Props = {
  produto: Product
  aberto: boolean
  fecharModal: () => void
}

const InfoModal = ({ produto, aberto, fecharModal }: Props) => {
  return (
    <Modal className={aberto ? 'visivel' : ''} onClick={fecharModal}>
      <ModalContent className="container">
        <header className="fechar">
          <img src={fechar} alt="fechar descrição" onClick={fecharModal} />
        </header>
        <ModalItems key={produto.id}>
          <div>
            <img src={produto.foto} alt={produto.nome} />
          </div>
          <div>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p>{produto.porcao}</p>
            <Button type="button" title="Adicione o Prato ao carrinho">
              {`Adicionar ao carrinho ${formataPreco(produto.preco)}`}
            </Button>
          </div>
        </ModalItems>
      </ModalContent>
      <div className="overlay" onClick={fecharModal}></div>
    </Modal>
  )
}

export default InfoModal
