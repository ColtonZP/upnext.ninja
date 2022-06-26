import { ReactNode } from 'react'
import { Grid } from '@mantine/core'

type Props = {
  children: ReactNode
}

export const GridCol = ({ children }: Props) => (
  <Grid.Col
    xs={6}
    sm={12}
    md={6}
    lg={3}
    xl={2}
    sx={{
      '@media (min-width: 2500px)': {
        flexBasis: `${100 / 12}%`,
        maxWidth: `${100 / 12}%`,
      },
    }}>
    {children}
  </Grid.Col>
)
