import React from 'react'
import { Router, Route, ReactLocation } from 'react-location'
import { useColorScheme } from '@mantine/hooks'
import { MantineProvider } from '@mantine/core'

import { Game, Index, List } from './pages'
import { AppShell } from './components/AppShell'

const routes: Route[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'game/:game',
    element: <Game />,
  },
  {
    path: 'list/:list',
    element: <List />,
  },
]

const location = new ReactLocation()

export const App = () => {
  const preferredColorScheme = useColorScheme()

  return (
    <Router routes={routes} location={location}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: preferredColorScheme }}>
        <AppShell />
      </MantineProvider>
    </Router>
  )
}
