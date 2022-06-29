import create from 'zustand'
import { devtools } from 'zustand/middleware'

import { Game, MinifiedGame, Playlist } from './types'
import { generateId, minifyGame } from './helpers'

export type AppStore = {
  playlists: Playlist[]
  gameDragId: number

  addList: (title: string) => void
  removeList: (id: string) => void
  renameList: (id: string, newName: string) => void
  addGame: (id: string, newGame: Game | MinifiedGame) => void
  removeGame: (id: string, newGame: Game | MinifiedGame) => void
  toggleCompletedGame: (listId: string, gamesId: number, completed: boolean) => void

  updateDragId: (id: number) => void
}

export const appStore = create<AppStore>()(
  devtools(set => ({
    playlists: [],
    gameDragId: -1,

    addList: title =>
      set(state => ({
        playlists: [...state.playlists, { title, id: generateId(), games: [] }],
      })),

    removeList: id =>
      set(state => ({
        playlists: state.playlists.filter(list => list.id !== id),
      })),

    renameList: (id, newName) =>
      set(state => ({
        playlists: state.playlists.map(list => (list.id === id ? { ...list, title: newName } : list)),
      })),

    addGame: (id, newGame) =>
      set(state => ({
        playlists: state.playlists.map(list =>
          list.id === id
            ? {
                ...list,
                games: [...list.games, 'completed' in newGame ? newGame : minifyGame(newGame as Game)],
              }
            : list,
        ),
      })),

    removeGame: (id, newGame) =>
      set(state => ({
        playlists: state.playlists.map(list =>
          list.id === id
            ? {
                ...list,
                games: list.games.filter(game => game.id !== newGame.id),
              }
            : list,
        ),
      })),

    updateDragId: id => set({ gameDragId: id }),

    toggleCompletedGame: (listId, gameId, completed) =>
      set(state => ({
        playlists: state.playlists.map(list =>
          list.id === listId
            ? {
                ...list,
                games: list.games.map(game => (game.id === gameId ? { ...game, completed } : game)),
              }
            : list,
        ),
      })),
  })),
)
