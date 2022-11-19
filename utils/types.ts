export type Game = {
  id: number
  artworks?: {
    id: number
    url: string
  }[]
  cover: {
    id: number
    url: string
  }
  first_release_date: number
  name: string
  slug: string
  total_rating: number
}

export type FullGame = Game & {
  summary: string
  platforms: {
    id: number
    name: string
  }[]
}
