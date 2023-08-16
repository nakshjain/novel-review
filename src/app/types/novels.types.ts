export interface Novel {
  id: string
  name: string
  author: string
  review: string
  imageUrl: string
  genre: string
  rating: string
}

export interface NovelsByGenre {
  genre: string
  novels: Novel[]
}
