export type GamesRes = {
  count: number
  next: string
  previous: string | null
  results: Game[]
  seo_title: string
  seo_description: string
  seo_keywords: string
  seo_h1: string
  noindex: boolean
  nofollow: boolean
  description: string
  filters: {
    years: {
      filter: string
      nofollow: boolean
      decade: number
      count: number
      from: number
      to: number
      years: { nofollow: boolean; year: number; count: number }[]
    }[]
  }
  nofollow_collections: string[]
}

export type Game = {
  id: number
  slug: string
  name: string
  released: string
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: { count: number; id: number; title: string; percent: number }[]
  ratings_count: number
  reviews_text_count: number
  added: number
  added_by_status: {
    owned: number
    beaten: number
    dropped: number
    yet: number
    playing: number
    toplay: number
  }
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string
  user_game: null | string
  reviews_count: number
  saturated_color: string
  dominant_color: string
  platforms: {
    requirements_ru: { minimum?: string; recommended?: string } | null
    requirements_en: { minimum?: string; recommended?: string } | null
    released_at: string | null
    platform: {
      image: null | string
      games_count: number
      year_end: null | number
      year_start: null | number
      name: string
      id: number
      image_background: string
      slug: string
    }
  }[]
  parent_platforms: { platform: { name: string; id: number; slug: string } }[]
  genres: {
    games_count: number
    name: string
    id: number
    image_background: string
    slug: string
  }[]
  stores: {
    id: number
    store: {
      id: number
      name: string
      slug: string
      domain: string
      games_count: number
      image_background: string
    }
  }[]
  clip: null | string
  tags: {
    games_count: number
    name: string
    language: string
    id: number
    image_background: string
    slug: string
  }[]
  esrb_rating: { name: string; id: number; slug: string }
  short_screenshots: { image: string; id: number }[]
}

export type MinifiedGame = {
  id: number
  name: string
  background_image: string
  slug: string
  released: string
  completed: boolean
}

export type Playlist = { title: string; id: string; games: MinifiedGame[] }
