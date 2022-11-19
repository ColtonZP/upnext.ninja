import { use } from 'react'

import { fetchGames } from '../../../utils/api'
import { GameGrid } from '../../_components/GameGrid'
import { Pagination } from '../../_components/Pagination'

export default function Page({ params }: { params: { game: string } }) {
  const games = use(fetchGames(Number(params.game) - 1))

  return (
    <main>
      <GameGrid games={games} />
      <Pagination />
    </main>
  )
}
