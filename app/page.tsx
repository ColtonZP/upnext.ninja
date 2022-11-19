import { use } from 'react'

import { fetchGames } from '../utils/api'
import { GameGrid } from './_components/GameGrid'
import { Pagination } from './_components/Pagination'

export default function Page() {
  const games = use(fetchGames())

  return (
    <main>
      <GameGrid games={games} />
      <Pagination />
    </main>
  )
}
