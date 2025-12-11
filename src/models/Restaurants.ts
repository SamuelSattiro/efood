class Restaurants {
  description: string
  image: string
  infos: string[]
  stars: string
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    stars: string,
    title: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.stars = stars
    this.title = title
  }
}

export default Restaurants
