import { useMemo, useState } from 'react'
import { useMatch } from 'react-location'
import { Button, Group, Menu, Title, useMantineTheme } from '@mantine/core'
import {
  Dots,
  Filter,
  Pencil,
  SortAscendingLetters,
  SortAscendingNumbers,
  SortDescendingLetters,
  SortDescendingNumbers,
  Trash,
} from 'tabler-icons-react'

import { useStore } from '../lib/store'
import { sortGame } from '../lib/helpers'
import { DeleteModal, RenameModal, PageNotFound, GameListLayout } from '../components'

type GameFilter = 'ASCEND_ALPHABETICAL' | 'DESCEND_ALPHABETICAL' | 'ASCEND_DATE' | 'DESCEND_DATE'

export const Playlist = () => {
  const theme = useMantineTheme()
  const { params } = useMatch()
  const { playlists } = useStore()

  const [filter, updateFilter] = useState<GameFilter>('ASCEND_ALPHABETICAL')
  const [deleteModal, toggleDeleteModal] = useState(false)
  const [renameModal, toggleRenameModal] = useState(false)

  const playlist = useMemo(() => playlists.find(list => list.id === params.list) ?? null, [playlists, params])

  const filteredGames = useMemo(() => {
    const games = playlist?.games || []

    switch (filter) {
      case 'ASCEND_ALPHABETICAL':
        return sortGame(games, 'name')
      case 'DESCEND_ALPHABETICAL':
        return sortGame(games, 'name').reverse()
      case 'ASCEND_DATE':
        return sortGame(games, 'released')
      case 'DESCEND_DATE':
        return sortGame(games, 'released').reverse()
      default:
        throw new Error()
    }
  }, [playlist?.games, filter])

  const handleRemoveModal = () => toggleDeleteModal(true)
  const handleRenameModal = () => toggleRenameModal(true)

  return playlist ? (
    <>
      <DeleteModal open={deleteModal} toggleOpen={toggleDeleteModal} playlist={playlist} />

      <RenameModal open={renameModal} toggleOpen={toggleRenameModal} playlist={playlist} />

      <GameListLayout
        title={
          <Group mb="xl">
            <Title order={2}>{playlist.title}</Title>

            <Menu
              control={
                <Button variant="default" px={5}>
                  <Dots size={20} />
                </Button>
              }
              transition="pop-top-right"
              placement="start"
              size="xs">
              <Menu.Item onClick={handleRenameModal} icon={<Pencil size={16} color={theme.colors.blue[6]} />}>
                Rename
              </Menu.Item>
              <Menu.Item onClick={handleRemoveModal} icon={<Trash size={16} color={theme.colors.red[8]} />}>
                Delete
              </Menu.Item>
            </Menu>

            <Menu
              control={
                <Button variant="default" px={5}>
                  <Filter size={20} />
                </Button>
              }
              transition="pop-top-right"
              placement="start"
              size="lg">
              <Menu.Item onClick={() => updateFilter('ASCEND_ALPHABETICAL')} icon={<SortAscendingLetters size={16} />}>
                Ascend Alphabetically
              </Menu.Item>
              <Menu.Item
                onClick={() => updateFilter('DESCEND_ALPHABETICAL')}
                icon={<SortDescendingLetters size={16} />}>
                Descend Alphabetically
              </Menu.Item>
              <Menu.Item onClick={() => updateFilter('ASCEND_DATE')} icon={<SortAscendingNumbers size={16} />}>
                Ascend Date
              </Menu.Item>
              <Menu.Item onClick={() => updateFilter('DESCEND_DATE')} icon={<SortDescendingNumbers size={16} />}>
                Descend Date
              </Menu.Item>
            </Menu>
          </Group>
        }
        games={filteredGames}
        playlist={playlist}
      />
    </>
  ) : (
    <PageNotFound />
  )
}
