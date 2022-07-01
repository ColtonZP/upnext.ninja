import create from 'zustand'
import { DataStore } from 'aws-amplify'
import { devtools } from 'zustand/middleware'

import { Game as FullGame } from './types'
import { minifyGame } from './helpers'
import { Game, Playlist } from '../models'

export type AppStore = {
  playlists: Playlist[]
  gameDragId: number

  getUserPlaylist: () => void

  updateDragId: (id: number) => void

  addList: (title: string) => void
  removeList: (id: string) => void
  renameList: (id: string, newName: string) => void
  addGame: (id: string, newGame: FullGame | Game) => void
  removeGame: (id: string, newGame: FullGame | Game) => void
  toggleCompletedGame: (listId: string, gamesId: number, completed: boolean) => void
}

export const appStore = create<AppStore>()(
  devtools(set => ({
    playlists: [],
    userPlaylists: { id: '' },
    gameDragId: -1,

    updateDragId: id => set({ gameDragId: id }),

    getUserPlaylist: async () => {
      const userPlaylists = await DataStore.query(Playlist)
      set({ playlists: userPlaylists })
    },

    addList: async title => {
      await DataStore.save(
        new Playlist({
          title,
          games: [],
        }),
      )
    },

    removeList: async id => {
      const playlist = await DataStore.query(Playlist, id)

      if (playlist) {
        await DataStore.delete(playlist)
      }
    },

    renameList: async (id, newName) => {
      const playlist = await DataStore.query(Playlist, id)

      if (playlist) {
        await DataStore.save(
          Playlist.copyOf(playlist, mutator => {
            mutator.title = newName
          }),
        )
      }
    },

    addGame: async (id, newGame) => {
      const playlist = await DataStore.query(Playlist, id)

      if (playlist) {
        await DataStore.save(
          Playlist.copyOf(playlist, mutator => {
            mutator.games = [...playlist.games!, 'completed' in newGame ? newGame : minifyGame(newGame)]
          }),
        )
      }
    },

    removeGame: async (id, newGame) => {
      const playlist = await DataStore.query(Playlist, id)

      if (playlist) {
        await DataStore.save(
          Playlist.copyOf(playlist, mutator => {
            mutator.games = playlist.games!.filter(game => game.id !== newGame.id)
          }),
        )
      }
    },

    toggleCompletedGame: async (id, gameId, completed) => {
      const playlist = await DataStore.query(Playlist, id)

      if (playlist) {
        await DataStore.save(
          Playlist.copyOf(playlist, mutator => {
            mutator.games = playlist.games!.map(game => (game.id === gameId ? { ...game, completed } : game))
          }),
        )
      }
    },
  })),
)
