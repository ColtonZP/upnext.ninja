import { useEffect, useState } from 'react'
import { Outlet } from 'react-location'
import { AppShell as MantineAppShell } from '@mantine/core'

import { DataStore } from 'aws-amplify'
import { Header, Navbar } from '.'
import { Playlist } from '../models'
import { appStore } from '../lib/app.store'

export const AppShell = () => {
  const { playlists, getUserPlaylist } = appStore()
  const [openedNavbar, toggleOpenedNavbar] = useState(false)

  useEffect(() => {
    getUserPlaylist()
    const subscription = DataStore.observe(Playlist).subscribe(async () => getUserPlaylist())
    return () => subscription.unsubscribe()
  }, [playlists])

  return (
    <MantineAppShell
      fixed
      navbarOffsetBreakpoint="sm"
      padding="md"
      header={<Header openedNavbar={openedNavbar} toggleOpenedNavbar={toggleOpenedNavbar} />}
      navbar={<Navbar openedNavbar={openedNavbar} toggleOpenedNavbar={toggleOpenedNavbar} />}>
      <Outlet />
    </MantineAppShell>
  )
}
