import { useState } from 'react'
import { useSearch } from 'react-location'
import { useQuery } from 'react-query'
import { Title } from '@mantine/core'

import { searchGamePage } from '../lib/api'
import { GamesRes } from '../lib/types'
import { DataError, GameListLayout } from '../components'

export const Search = () => {
  const search = useSearch()
  const [page, setPage] = useState(1)

  const { data, isError, isFetching } = useQuery<GamesRes>(
    [`game-search`, search.game, page],
    () => searchGamePage(search.game as string, { page }),
    {
      onSuccess: () => window.scrollTo(0, 0),
    },
  )

  if (isError) return <DataError />

  return (
    <GameListLayout
      title={
        <Title order={2} pb="xl">
          {`Search results for "${search.game}"`}
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
