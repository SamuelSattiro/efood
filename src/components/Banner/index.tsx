import Tag from '../Tag'
import { Imagem, TagOne, TagTwo } from './styles'
import Banners from '../../models/Banners'

export type Props = {
  banners: Banners[]
}

const Banner = ({ banners }: Props) => (
  <>
    {banners.map((banner) => (
      <Imagem
        key={banner.id}
        style={{ backgroundImage: `url(${banner.image})` }}
      >
        <div className="container">
          <TagOne>
            <Tag size="big">{banner.type}</Tag>
          </TagOne>
          <TagTwo>
            <Tag size="big">{banner.title}</Tag>
          </TagTwo>
        </div>
      </Imagem>
    ))}
  </>
)

export default Banner
