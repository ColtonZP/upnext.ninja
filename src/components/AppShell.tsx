import React from 'react'
import { Outlet } from 'react-location'
import { AppShell as MantineAppShell } from '@mantine/core'

import { Header, Navbar } from '.'

export const AppShell: React.FC = () => {
  return (
    <MantineAppShell fixed padding="md" header={<Header />} navbar={<Navbar />}>
      <Outlet />
    </MantineAppShell>
  )
}
