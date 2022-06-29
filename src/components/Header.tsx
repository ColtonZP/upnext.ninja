import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-location'
import { Title, Header as MantineHeader, createStyles, Group, Burger, Button } from '@mantine/core'
import { DataStore } from 'aws-amplify'
import { userStore } from '../lib/user.store'
import { UserPlaylist } from '../models'
import { appStore } from '../lib/app.store'

type Props = {
  openedNavbar: boolean
  toggleOpenedNavbar: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ openedNavbar, toggleOpenedNavbar }: Props) => {
  const { classes } = useStyles()
  const { signOut } = userStore()
  const { getDB } = appStore()

  const createDB = async () => {
    await DataStore.save(
      new UserPlaylist({
        playlists: [],
      }),
    )
  }

  const getDB2 = async () => {
    const models = await DataStore.query(UserPlaylist)
    console.log(models)
  }
  const clear = async () => DataStore.clear()

  // const removeDB = async () => {
  //   const modelToDelete = await DataStore.query(UserPlaylist, '70a438d0-9925-4a07-8c45-6ab5b1edd6df')
  //   DataStore.delete(modelToDelete)
  // }

  // "f36973ed-a167-4eee-8025-5ba665f11bf3"

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
          <Button onClick={createDB}>Create DB</Button>
          <Button onClick={getDB}>Get DB</Button>
          <Button onClick={getDB2}>Get DB all</Button>
          <Button onClick={clear}>Clear</Button>
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
