import 'server-only'

import type { FullGame, Game } from './types'

const BASE_URL = 'https://4olbanooy3.execute-api.us-west-2.amazonaws.com/production/v4'

// const formatParams = (params: Record<string, string>) =>
// Object.entries(params)
//   .map(item => `${item[0]}=${encodeURI(item[1])}`)
//   .join('&')

async function postFetch(url: string, data?: string) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'x-api-key': process.env.API_KEY!,
    },
    ...(data && { body: data }),
  })

  return response.json()
}

export async function fetchGames(offset?: number): Promise<Game[]> {
  return postFetch(
    `${BASE_URL}/games`,
    `fields name,total_rating,first_release_date,cover.url,slug,artworks.url;sort follows desc;where total_rating < 100 & follows > 0 & cover.url != n & age_ratings.category = 1 & age_ratings.rating < 12;limit 36; ${
      offset ? `offset ${offset * 36};` : ''
    }`,
  )
}

export async function fetchGame(game?: string): Promise<FullGame[]> {
  return postFetch(
    `${BASE_URL}/games`,
    `fields name,summary,total_rating,first_release_date,cover.url,artworks.url;sort follows desc;where slug = "${game}";`,
  )
}
