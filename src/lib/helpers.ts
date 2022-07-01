import { Game as FullGame } from './types'
import { Game } from '../models'

export const minifyGame = (game: FullGame): Game => ({
  id: game.id,
  name: game.name,
  background_image: game.background_image,
  slug: game.slug,
  released: game.released,
  completed: false,
})

export const sortGame = (games: Game[], by: 'name' | 'released') =>
  [...games].sort((a, b) => a[by].localeCompare(b[by]))

export const isElectron = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  return userAgent.indexOf(' electron/') !== -1
}
