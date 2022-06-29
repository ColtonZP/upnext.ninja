import React, { useEffect } from 'react'
import { Router, Route, ReactLocation, createHashHistory, createBrowserHistory } from 'react-location'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useColorScheme } from '@mantine/hooks'
import { MantineProvider } from '@mantine/core'

import { Game, Index, Playlist, Search } from './pages'
import { AppShell } from './components'
import { isElectron } from './lib/helpers'
import { Authentication } from './pages/Authentication'
import { UnconfirmedUser, userStore } from './lib/user.store'

const routes: Route[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'search/',
    element: <Search />,
  },
  {
    path: 'game/:game',
    element: <Game />,
  },
  {
    path: 'list/:list',
    element: <Playlist />,
  },
]

export const history = isElectron() ? createHashHistory() : createBrowserHistory()
const location = new ReactLocation({ history })
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
      cacheTime: 900000,
      refetchOnMount: false,
    },
  },
})

export const App = () => {
  const preferredColorScheme = useColorScheme()
  const { user, getUser } = userStore()

  useEffect(() => {
    getUser()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: preferredColorScheme }}>
        {!user || ('userConfirmed' in user && !(user as UnconfirmedUser).userConfirmed) ? (
          <Authentication />
        ) : (
          <Router routes={routes} location={location}>
            <AppShell />
          </Router>
        )}
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
