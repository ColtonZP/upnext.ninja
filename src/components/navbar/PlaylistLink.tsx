import { Dispatch, DragEvent, SetStateAction, useState } from 'react'
import { Link, useRouter } from 'react-location'
import { Button } from '@mantine/core'
import { Playlist } from '../../lib/types'
import { appStore } from '../../lib/app.store'
import { linkStyles } from './styles'

type Props = {
  playlist: Playlist
  toggleOpenedNavbar: Dispatch<SetStateAction<boolean>>
}

export const PlaylistLink = ({ playlist, toggleOpenedNavbar }: Props) => {
  const router = useRouter()
  const { classes, cx } = linkStyles()
  const { gameDragId, addGame } = appStore()

  const [validDragOver, updateValidDragOver] = useState('')
  const [invalidDragOver, updateInvalidDragOver] = useState('')

  const handleDragOver = (e: DragEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (playlist.games.find(game => game.id === gameDragId)) {
      e.dataTransfer.dropEffect = 'none'
      updateInvalidDragOver((e.target as HTMLDivElement).id)
    } else updateValidDragOver((e.target as HTMLDivElement).id)
  }

  const handleDragLeave = () => {
    updateValidDragOver('')
    updateInvalidDragOver('')
  }

  const handleDropEvent = (e: DragEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    updateValidDragOver('')
    const newGame = JSON.parse(e.dataTransfer.getData('game'))
    const { id } = e.target as HTMLDivElement
    addGame(id, newGame)
  }

  return (
    <Button
      onClick={() => toggleOpenedNavbar(false)}
      variant="subtle"
      size="lg"
      key={playlist.id}
      id={playlist.id}
      onDrop={handleDropEvent}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      component={Link}
      to={`/list/${playlist.id}`}
      className={cx(classes.link, {
        [classes.linkActive]: router.state.location.href === `/list/${playlist}`,
        [classes.validDragOver]: validDragOver === playlist.id,
        [classes.invalidDragOver]: invalidDragOver === playlist.id,
      })}>
      {playlist.title}
    </Button>
  )
}
