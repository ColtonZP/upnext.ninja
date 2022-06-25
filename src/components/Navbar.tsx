import React, { useMemo, useState } from 'react'
import { Link, useRouter } from 'react-location'
import { useQuery } from 'react-query'
import { Plus, Search } from 'tabler-icons-react'
import {
  ActionIcon,
  Button,
  createStyles,
  Group,
  Navbar as MantineNavbar,
  ScrollArea,
  Title,
  Tooltip,
} from '@mantine/core'

import { TextInput } from '.'
import { Game, GamesRes } from '../lib/types'
import { searchGamePage } from '../lib/api'
import { newestGames } from '../lib/dummyData'

export const Navbar = () => {
  const router = useRouter()
  const { classes, cx } = useStyles()

  const [search, updateSearch] = useState('')
  const [searchSubmitted, toggleSearchSubmitted] = useState(false)
  const [newListForm, toggleNewListForm] = useState(false)
  const [newList, updateNewList] = useState('')
  const [lists, updateLists] = useState<
    { title: string; id: number; games: Game[] }[]
  >([
    { title: 'Playlist', id: 1, games: [] },
    { title: 'Wishlist', id: 2, games: [] },
  ])
  const [dragOver, updateDragOver] = useState('')

  const searchTerm = useMemo(
    () =>
      router.state.matches[0]?.params.list
        ? `Search Games in ${router.state.matches[0].params.list}`
        : 'Search All Games',
    [router.state.matches[0]],
  )

  useQuery<GamesRes>(`games`, () => searchGamePage(search), {
    onSuccess: () => toggleSearchSubmitted(false),
    enabled: searchSubmitted,
    initialData: newestGames,
  })

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search.length) toggleSearchSubmitted(true)
  }

  const handleSubmitList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateLists(prevState => [
      ...prevState,
      { title: newList, id: prevState.length + 1, games: [] },
    ])
    updateNewList('')
    toggleNewListForm(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    updateDragOver((e.target as HTMLDivElement).id)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLAnchorElement>) => {
    updateDragOver('')
  }

  const handleDropEvent = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    updateDragOver('')
    const newGame = JSON.parse(e.dataTransfer.getData('game'))
    const { id } = e.target as HTMLDivElement
    updateLists(prevState =>
      prevState.map(list =>
        list.id === +id ? { ...list, games: [...list.games, newGame] } : list,
      ),
    )
  }

  return (
    <MantineNavbar width={{ base: 300 }} p="xs" pt="lg" fixed>
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
      <MantineNavbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {lists.map(list => (
          <Button
            variant="subtle"
            size="lg"
            key={`${list.title}-${list.id}`}
            id={String(list.id)}
            onDrop={handleDropEvent}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            component={Link}
            to={`/list/${list.title}`}
            className={cx(classes.link, {
              [classes.linkActive]:
                router.state.location.href === `/list/${list}`,
              [classes.validateDragOver]: dragOver === `${list.id}`,
            })}>
            {list.title}
          </Button>
        ))}
      </MantineNavbar.Section>
    </MantineNavbar>
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
    padding: theme.spacing.xs,
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

  validateDragOver: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][5], 0.5)
        : theme.colors[theme.primaryColor][2],
    color:
      theme.colorScheme === 'dark'
        ? theme.white
        : theme.colors[theme.primaryColor][7],
  },
}))
