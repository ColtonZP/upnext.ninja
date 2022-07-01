import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-location'
import { Title, Header as MantineHeader, createStyles, Group, Burger, Button } from '@mantine/core'
import { userStore } from '../lib/user.store'

type Props = {
  openedNavbar: boolean
  toggleOpenedNavbar: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ openedNavbar, toggleOpenedNavbar }: Props) => {
  const { classes } = useStyles()
  const { signOut } = userStore()

  return (
    <MantineHeader height={64.2} px="lg" py="xs">
      <Group position="apart">
        <Group>
          <Burger opened={openedNavbar} onClick={() => toggleOpenedNavbar(!openedNavbar)} size="sm" />
          <Title className={classes.plainLink}>
            <Link onClick={() => toggleOpenedNavbar(false)} to="/">
              Games Up Next 🥷
            </Link>
          </Title>
        </Group>
        <Group>
          <Button onClick={() => signOut()}>Log out</Button>
        </Group>
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
