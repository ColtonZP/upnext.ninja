'use client'

import { ReactNode } from 'react'

import { motion, LayoutGroup } from 'framer-motion'
import './global.css'
import { usePathname } from 'next/navigation'

import { Header } from './Header'
import { Nav } from './Nav'

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname()

  return (
    <html lang="en">
      <head>
        <title>Games Up Next 🥷</title>
        <meta name="description" content="Games Up Next" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Header />
        <Nav />
        <LayoutGroup>
          <motion.div
            // style={{ position: 'relative' }}
            key={pathName}
            initial={{
              top: '10%',
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            animate={{
              top: '0',
              opacity: 1,
            }}>
            {children}
          </motion.div>
        </LayoutGroup>
      </body>
    </html>
  )
}
