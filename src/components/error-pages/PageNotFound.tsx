import React from 'react'
import { Link } from 'react-location'
import { Title, Text, Button, Container, Group } from '@mantine/core'

import { errorStyles } from '.'

export function PageNotFound() {
  const { classes } = errorStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Playlist not found</Title>
      <Text color="dimmed" align="center" className={classes.description}>
        The page you are looking for may have been moved to another URL.
      </Text>

      <Group position="center">
        <Button component={Link} to="/">
          Go back to home page
        </Button>
      </Group>
    </Container>
  )
}
