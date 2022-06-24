import React from 'react'
import { useMatch } from 'react-location'
import { Title } from '@mantine/core'

export const Game = () => {
  const { params } = useMatch()

  return (
    <div>
      <Title order={2}>{params.game}</Title>
    </div>
  )
}
