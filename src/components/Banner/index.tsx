import Tag from '../Tag'
import { Imagem, TagOne, TagTwo } from './styles'
import { Restaurante } from '../../models/Restaurante'

export type Props = {
  banner: Restaurante
}

const Banner = ({ banner }: Props) => (
  <Imagem style={{ backgroundImage: `url(${banner.capa})` }}>
    <div className="container">
      <TagOne>
        <Tag size="big">{banner.tipo}</Tag>
      </TagOne>
      <TagTwo>
        <Tag size="big">{banner.titulo}</Tag>
      </TagTwo>
    </div>
  </Imagem>
)

export default Banner
