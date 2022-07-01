import { Dispatch, FormEvent, SetStateAction, useMemo, useState } from 'react'
import { Link, useNavigate, useRouter } from 'react-location'
import { Plus, Search } from 'tabler-icons-react'
import { ActionIcon, Group, Navbar as MantineNavbar, ScrollArea, Title, Tooltip } from '@mantine/core'

import { TextInput } from '../index'
import { appStore } from '../../lib/app.store'
import { PlaylistLink } from './PlaylistLink'
import { linkStyles } from './styles'

type Props = {
  openedNavbar: boolean
  toggleOpenedNavbar: Dispatch<SetStateAction<boolean>>
}

export const Navbar = ({ openedNavbar, toggleOpenedNavbar }: Props) => {
  const router = useRouter()
  const navigate = useNavigate()
  const { classes, cx } = linkStyles()

  const { playlists, addList } = appStore()

  const [search, updateSearch] = useState('')
  const [newListForm, toggleNewListForm] = useState(false)
  const [newList, updateNewList] = useState('')

  const playlistView = useMemo(
    () => playlists.find(list => list.id === router.state.matches[0]?.params.list),
    [router.state.matches[0]],
  )

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search.length) navigate({ to: '/search', search: { game: search }, replace: true })
  }

  const handleSubmitList = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addList(newList)
    updateNewList('')
    toggleNewListForm(false)
  }

  return (
    <MantineNavbar width={{ base: 300 }} p="xs" pt="lg" hidden={!openedNavbar} hiddenBreakpoint="sm">
      <TextInput
        placeholder={playlistView ? 'Search all games' : 'Search all games'}
        inputValue={search}
        updateInputValue={updateSearch}
        handleSubmit={handleSearch}
        icon={<Search size={16} />}
      />

      <Title order={3} my="md">
        <Link
          onClick={() => {
            window.scrollTo(0, 0)
            toggleOpenedNavbar(false)
          }}
          to="/"
          className={cx(classes.link, {
            [classes.linkActive]: router.state.location.href === '/',
          })}>
          Discover Games
        </Link>
      </Title>

      <Group position="apart" pb="sm" mb="sm" mx="sm" className={classes.listHeader}>
        <Title order={3}>Lists</Title>
        <Tooltip label="Create list" withArrow position="right">
          <ActionIcon onClick={() => toggleNewListForm(true)} variant="default" size={20}>
            <Plus size={16} />
          </ActionIcon>
        </Tooltip>
      </Group>
      {newListForm && (
        <TextInput
          placeholder="New Playlist"
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
        {!!playlists.length &&
          playlists?.map(playlist => (
            <PlaylistLink key={`${playlist.id}-link`} playlist={playlist} toggleOpenedNavbar={toggleOpenedNavbar} />
          ))}
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}
