import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-location'
import { Button, Group, Modal, Text, Title } from '@mantine/core'

import { Playlist } from '../../models'
import { appStore } from '../../lib/app.store'

type Props = {
  open: boolean
  toggleOpen: Dispatch<SetStateAction<boolean>>
  playlist: Playlist
}

export const DeleteModal = ({ open, toggleOpen, playlist }: Props) => {
  const { removeList } = appStore()
  const navigate = useNavigate()

  const handleClose = () => toggleOpen(false)

  const handleRemoveList = () => {
    navigate({ to: '/', replace: true })
    removeList(playlist.id)
  }

  return (
    <Modal size="md" opened={open} onClose={handleClose} title={<Title order={5}>Confirmation</Title>}>
      <Text mb="lg">Are you sure you want to delete {playlist.title}?</Text>
      <Group position="right">
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleRemoveList} color="red">
          Delete {playlist.title}
        </Button>
      </Group>
    </Modal>
  )
}
