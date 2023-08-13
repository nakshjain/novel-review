export interface Novel {
  id: string
  name: string
  review: string
  imageLink: string
  genre: string
  rating: number
}

export interface NovelsByGenre {
  title: string
  novels: Novel[]
}
