import { useState } from 'react'
import { useQuery } from 'react-query'
import { Title } from '@mantine/core'

import { getGames } from '../lib/api'
import { GamesRes } from '../lib/types'
import { DataError, GameListLayout } from '../components'

export * from './playlist'
export * from './game'
export * from './search'

export const Index = () => {
  const [page, setPage] = useState(1)

  const { data, isError, isFetching } = useQuery<GamesRes>(['games', page], () => getGames(page), {
    keepPreviousData: true,
    onSuccess: () => window.scrollTo(0, 0),
  })

  if (isError) return <DataError />

  return (
    <GameListLayout
      title={
        <Title order={2} pb="xl">
          Games
        </Title>
      }
      games={data?.results ?? []}
      isFetching={isFetching}
      page={page}
      handleChangePage={setPage}
      gamesCount={data?.count ?? 0}
    />
  )
}
