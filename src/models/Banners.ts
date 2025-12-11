class Banners {
  image: string
  type: string
  title: string
  id: number

  constructor(id: number, image: string, type: string, title: string) {
    this.id = id
    this.image = image
    this.type = type
    this.title = title
  }
}

export default Banners
