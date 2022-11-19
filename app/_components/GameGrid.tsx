'use client'

import type { Game } from '../../utils/types'

import { GameCover } from './GameCover'

export function GameGrid({ games }: { games: Game[] }) {
  return (
    <div className="grid">
      {games.map(game => (
        <GameCover game={game} />
      ))}
    </div>
  )
}
