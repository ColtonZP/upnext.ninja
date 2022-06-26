import { Game, MinifiedGame } from './types'

export const minifyGame = (game: Game): MinifiedGame => ({
  id: game.id,
  name: game.name,
  background_image: game.background_image,
  slug: game.slug,
  released: game.released,
  completed: false,
})

export const generateId = () => Math.random().toString(16).slice(2, 7)

export const sortGame = (games: MinifiedGame[], by: 'name' | 'released') =>
  games.sort((a, b) => a[by].localeCompare(b[by]))
