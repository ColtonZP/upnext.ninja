import { Title } from '@mantine/core'
import React from 'react'
import { useMatch } from 'react-location'

export const List = () => {
  const { params } = useMatch()

  return (
    <div>
      <Title order={2}>{params.list}</Title>
    </div>
  )
}
