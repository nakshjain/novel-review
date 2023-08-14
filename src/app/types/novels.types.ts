export interface Novel {
  id: string
  name: string
  author: string
  review: string
  imageLink: string
  genre: string
  rating: string
}

export interface NovelsByGenre {
  title: string
  novels: Novel[]
}