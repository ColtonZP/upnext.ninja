import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-location'
import { Title, Header as MantineHeader, createStyles, Group, Burger } from '@mantine/core'

type Props = {
  openedNavbar: boolean
  toggleOpenedNavbar: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ openedNavbar, toggleOpenedNavbar }: Props) => {
  const { classes } = useStyles()

  return (
    <MantineHeader height={64.2} px="lg" py="xs">
      <Group>
        <Burger opened={openedNavbar} onClick={() => toggleOpenedNavbar(!openedNavbar)} size="sm" />
        <Title className={classes.plainLink}>
          <Link onClick={() => toggleOpenedNavbar(false)} to="/">
            Games Up Next 🥷
          </Link>
        </Title>
      </Group>
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
