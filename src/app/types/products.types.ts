export interface product {
  id: string
  name: string
  author: string
  review: string
  imageUrl: string
  genre: string
  rating: string
}

export interface productsByGenre {
  genre: string
  products: product[]
}
