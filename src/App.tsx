import React from 'react'
import { Router, Route, ReactLocation } from 'react-location'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useColorScheme } from '@mantine/hooks'
import { MantineProvider } from '@mantine/core'

import { Game, Index, Playlist, Search } from './pages'
import { AppShell } from './components'

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

const location = new ReactLocation()
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

  return (
    <QueryClientProvider client={queryClient}>
      <Router routes={routes} location={location}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: preferredColorScheme }}>
          <AppShell />
        </MantineProvider>
      </Router>

      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  )
}
