import React from 'react'
import { Grid, Title } from '@mantine/core'
import { useQuery } from 'react-query'

import { getGames } from '../lib/api'
import { newestGames } from '../lib/dummyData'
import { GamesRes } from '../lib/types'
import { GameCard } from '../components'

export * from './list'
export * from './game'

export const Index = () => {
  const games = useQuery<GamesRes>('games', getGames, {
    enabled: false,
    initialData: newestGames,
  })

  if (games.isLoading) return <>Loading...</>

  if (games.isSuccess)
    return (
      <div>
        <Title order={2} pb="xl">
          New Games
        </Title>
        <Grid>
          {games.data.results.map(game => (
            <Grid.Col xs={3}>
              <GameCard game={game} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    )

  return <>Failed to load</>
}
