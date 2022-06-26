import { Dispatch, ReactNode, SetStateAction } from 'react'

import { Grid, Group, Pagination, Skeleton } from '@mantine/core'
import { GameCard } from './GameCard'
import { GridCol } from './GridCol'
import { Game, MinifiedGame, Playlist } from '../lib/types'

type Props = {
  title: ReactNode
  games: Game[] | MinifiedGame[]
  playlist?: Playlist
  isFetching?: boolean
  gamesCount?: number
  page?: number
  handleChangePage?: Dispatch<SetStateAction<number>>
}

export const GameListLayout = ({ title, games, playlist, isFetching, gamesCount, page, handleChangePage }: Props) => {
  return (
    <>
      {title}
      <Grid mb="xl">
        {isFetching
          ? [...Array(36)].map((skeleton, i) => (
              <GridCol key={`skeleton-${i}`}>
                <Skeleton height={450} />
              </GridCol>
            ))
          : games.map(game => (
              <GridCol key={`new-game-${game.id}`}>
                <GameCard game={game} playlist={playlist} />
              </GridCol>
            ))}
      </Grid>

      {page && (
        <Group position="center">
          <Pagination page={page} onChange={handleChangePage} total={Math.ceil(gamesCount! / 36)} />
        </Group>
      )}
    </>
  )
}

GameListLayout.defaultProps = {
  playlist: 0,
  isFetching: false,
  gamesCount: 0,
  page: null,
  handleChangePage: () => null,
}
