import React, { useMemo, useState } from 'react'
import { Link, Outlet, useRouter } from 'react-location'
import {
  ActionIcon,
  AppShell as MantineAppShell,
  createStyles,
  Group,
  Header,
  Navbar,
  Title,
  Tooltip,
} from '@mantine/core'
import { Plus, Search } from 'tabler-icons-react'
import { TextInput } from './TextInput'

export const AppShell: React.FC = () => {
  const router = useRouter()
  const { classes, cx } = useStyles()

  const [search, updateSearch] = useState('')
  const [newListForm, toggleNewListForm] = useState(false)
  const [newList, updateNewList] = useState('')
  const [lists, updateLists] = useState(['Playlist', 'Wishlist'])

  const searchTerm = useMemo(
    () =>
      router.state.matches[0]?.params.list
        ? `Search Games in ${router.state.matches[0].params.list}`
        : 'Search All Games',
    [router.state.matches[0]],
  )

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(search)
  }

  const handleSubmitList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateLists(prevState => [...prevState, newList])
    updateNewList('')
    toggleNewListForm(false)
  }

  return (
    <MantineAppShell
      padding="md"
      header={
        <Header height={64.2} px="lg" py="xs">
          <Title className={classes.plainLink}>
            <Link to="/">Games Up Next 🥷</Link>
          </Title>
        </Header>
      }
      navbar={
        <Navbar width={{ base: 300 }} p="xs" pt="lg">
          <TextInput
            placeholder={searchTerm}
            inputValue={search}
            updateInputValue={updateSearch}
            handleSubmit={handleSearch}
            icon={<Search size={16} />}
          />

          <Title order={3} my="md">
            <Link
              to="/"
              className={cx(classes.link, {
                [classes.linkActive]: router.state.location.href === '/',
              })}>
              Discover Games
            </Link>
          </Title>

          <Group
            position="apart"
            pb="sm"
            mb="sm"
            mx="sm"
            className={classes.listHeader}>
            <Title order={3}>Lists</Title>
            <Tooltip label="Create list" withArrow position="right">
              <ActionIcon
                onClick={() => toggleNewListForm(true)}
                variant="default"
                size={20}>
                <Plus size={16} />
              </ActionIcon>
            </Tooltip>
          </Group>
          {newListForm && (
            <TextInput
              placeholder="New List"
              inputValue={newList}
              updateInputValue={updateNewList}
              handleSubmit={handleSubmitList}
              closeButton
              listInput
              toggleClose={() => {
                toggleNewListForm(false)
                updateNewList('')
              }}
            />
          )}
          {lists.map(list => (
            <Title order={4}>
              <Link
                to={`/list/${list}`}
                className={cx(classes.link, {
                  [classes.linkActive]:
                    router.state.location.href === `/list/${list}`,
                })}>
                {list}
              </Link>
            </Title>
          ))}
        </Navbar>
      }>
      <Outlet />
    </MantineAppShell>
  )
}

const useStyles = createStyles(theme => ({
  plainLink: {
    'a:visited': { color: 'inherit' },
    'a:link': { color: 'inherit' },
    a: { textDecoration: 'none' },
  },

  listHeader: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    color: 'inherit',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colorScheme === 'dark'
          ? theme.white
          : theme.colors[theme.primaryColor][7],
    },
  },
}))
