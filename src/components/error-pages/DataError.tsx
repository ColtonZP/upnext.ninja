import React from 'react'
import { Link } from 'react-location'
import { Title, Text, Button, Container, Group } from '@mantine/core'

import { errorStyles } from '.'

export function DataError() {
  const { classes } = errorStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.label}>500</div>
      <Title className={classes.title}>Playlist not found</Title>
      <Text color="dimmed" align="center" className={classes.description}>
        There was trouble getting what you&#39;re looking for, refresh the page or try again later.
      </Text>

      <Group position="center">
        <Button component={Link} to="/">
          Go back to home page
        </Button>
      </Group>
    </Container>
  )
}
