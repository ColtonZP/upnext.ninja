import { Dispatch, SetStateAction, MouseEvent } from 'react'
import { Link } from 'react-location'
import {
  Title,
  Header as MantineHeader,
  createStyles,
  Group,
  Burger,
  Button,
  Menu,
  ActionIcon,
  useMantineTheme,
} from '@mantine/core'
import { useOs } from '@mantine/hooks'
import { BrandApple, BrandWindows, ChevronDown, Cpu } from 'tabler-icons-react'
import { Storage } from '@aws-amplify/storage'
import { saveAs } from 'file-saver'

import { userStore } from '../lib/user.store'
import { isElectron } from '../lib/helpers'

type Props = {
  openedNavbar: boolean
  toggleOpenedNavbar: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ openedNavbar, toggleOpenedNavbar }: Props) => {
  const { classes } = useStyles()
  const { signOut } = userStore()
  const os = useOs()
  const theme = useMantineTheme()
  const menuIconColor = theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6]

  const handleDownload = async (
    e: MouseEvent<HTMLButtonElement>,
    version?: 'appleSilicon' | 'appleIntel' | 'windows',
  ) => {
    let file
    if (version === 'appleSilicon') file = await Storage.get('downloads/Games-Up-Next-1.0.0-arm64.dmg')
    else if (version === 'appleIntel') file = await Storage.get('downloads/Games-Up-Next-1.0.0.dmg')
    else if (version === 'windows') file = await Storage.get('downloads/Games-Up-Next-1.0.0.msi')
    else if (os === 'macos') file = await Storage.get('downloads/Games-Up-Next-1.0.0.dmg')
    else file = await Storage.get('downloads/Games-Up-Next-1.0.0.msi')

    saveAs(file)
  }

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
          {!isElectron() && (os === 'macos' || os === 'windows') && (
            <Group noWrap spacing={0}>
              <Button onClick={handleDownload} className={classes.button}>
                Download for {os === 'macos' ? 'macOS(Intel)' : 'Windows'}
              </Button>
              <Menu
                control={
                  <ActionIcon variant="filled" color={theme.primaryColor} size={36} className={classes.menuControl}>
                    <ChevronDown size={16} />
                  </ActionIcon>
                }
                transition="pop"
                placement="end"
                size="lg">
                <Menu.Item
                  onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>
                    handleDownload(e, 'appleSilicon')
                  }
                  icon={<BrandApple size={16} color={menuIconColor} />}>
                  macOS(Apple Silicon)
                </Menu.Item>
                <Menu.Item
                  onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => handleDownload(e, 'appleIntel')}
                  icon={<Cpu size={16} color={menuIconColor} />}>
                  macOS(Intel)
                </Menu.Item>
                <Menu.Item
                  onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => handleDownload(e, 'windows')}
                  icon={<BrandWindows size={16} color={menuIconColor} />}>
                  Windows
                </Menu.Item>
              </Menu>
            </Group>
          )}
          <Button onClick={() => signOut()}>Log out</Button>
        </Group>
      </Group>
    </MantineHeader>
  )
}

const useStyles = createStyles(theme => ({
  plainLink: {
    'a:visited': { color: 'inherit' },
    'a:link': { color: 'inherit' },
    a: { textDecoration: 'none' },
  },

  button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}))
