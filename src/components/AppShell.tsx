import { useState } from 'react'
import { Outlet } from 'react-location'
import { AppShell as MantineAppShell } from '@mantine/core'

import { Header, Navbar } from '.'

export const AppShell = () => {
  const [openedNavbar, toggleOpenedNavbar] = useState(false)

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
