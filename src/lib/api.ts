import { GamesRes } from './types'

const BASE_URL = 'https://api.rawg.io/api'

const getFetch = (
  url: string,
  params: Record<string, string | number | boolean>,
) =>
  fetch(
    `${BASE_URL}/${url}?key=${process.env.REACT_APP_API_KEY}&${formatParams(
      params,
    )}`,
  ).then(res => res.json())

const formatParams = (params: Record<string, string | number | boolean>) =>
  Object.entries(params)
    .map(item => `${item[0]}=${item[1]}`)
    .join('&')

export const getGames = async (): Promise<GamesRes> =>
  getFetch('games', { ordering: 'released' })

export const searchGamePage = async (
  search: string,
  options?: Record<string, string | number | boolean>,
): Promise<GamesRes> => getFetch('games', { search, ...options })
