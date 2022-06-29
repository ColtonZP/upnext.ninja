import { useMemo } from 'react'
import { useMatch } from 'react-location'
import { useQuery } from 'react-query'
import { Loader, Title } from '@mantine/core'

import { GamesRes } from '../lib/types'
import { searchGamePage } from '../lib/api'
import { DataError } from '../components'

export const Game = () => {
  const { params } = useMatch()

  const gamesSearch = useQuery<GamesRes>(`${params.game}-search`, () => searchGamePage(params.game))

  const foundGame = useMemo(
    () => (gamesSearch.isSuccess ? gamesSearch.data.results.find(game => game.slug === params.game) : null),
    [gamesSearch],
  )

  if (gamesSearch.isLoading) return <Loader />

  if (foundGame)
    return (
      <div>
        <Title order={2}>{foundGame.name}</Title>
      </div>
    )

  return <DataError />
}
