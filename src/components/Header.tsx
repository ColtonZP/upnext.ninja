import React from 'react'
import { Link } from 'react-location'
import { Title, Header as MantineHeader, createStyles } from '@mantine/core'

export const Header = () => {
  const { classes } = useStyles()

  return (
    <MantineHeader height={64.2} px="lg" py="xs" fixed>
      <Title className={classes.plainLink}>
        <Link to="/">Games Up Next 🥷</Link>
      </Title>
    </MantineHeader>
  )
}

const useStyles = createStyles(() => ({
  plainLink: {
    'a:visited': { color: 'inherit' },
    'a:link': { color: 'inherit' },
    a: { textDecoration: 'none' },
  },
}))
