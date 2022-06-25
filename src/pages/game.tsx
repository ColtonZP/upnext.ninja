import React, { useMemo } from 'react'
import { useMatch } from 'react-location'
import { Title } from '@mantine/core'
import { useQuery } from 'react-query'

import { GamesRes } from '../lib/types'
import { searchGamePage } from '../lib/api'

export const Game = () => {
  const { params } = useMatch()

  const gamesSearch = useQuery<GamesRes>(`${params.game}-search`, () =>
    searchGamePage(params.game, { search_exact: true }),
  )

  const foundGame = useMemo(
    () =>
      gamesSearch.isSuccess
        ? gamesSearch.data.results.find(game => game.slug === params.game)
        : null,
    [gamesSearch],
  )

  if (gamesSearch.isLoading) return <>Loading...</>

  if (foundGame)
    return (
      <div>
        <Title order={2}>{foundGame.name}</Title>
      </div>
    )

  return <>Failed to load</>
}
