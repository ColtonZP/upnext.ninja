import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { Button, Group, Modal, Text, TextInput, Title } from '@mantine/core'

import { Playlist } from '../../models'
import { appStore } from '../../lib/app.store'

type Props = {
  open: boolean
  toggleOpen: Dispatch<SetStateAction<boolean>>
  playlist: Playlist
}

export const RenameModal = ({ open, toggleOpen, playlist }: Props) => {
  const { renameList } = appStore()

  const [newName, updateNewName] = useState('')

  const handleClose = () => toggleOpen(false)

  const handleRenameList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    renameList(playlist.id, newName)
    handleClose()
  }

  return (
    <Modal size="md" opened={open} onClose={handleClose} title={<Title order={5}>Rename</Title>}>
      <Text>Rename {playlist.title}.</Text>
      <form onSubmit={handleRenameList}>
        <TextInput
          onChange={e => updateNewName(e.target.value)}
          value={newName}
          placeholder="New name"
          my="lg"
          required
        />
        <Group position="right">
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="green" type="submit">
            Rename {playlist.title}
          </Button>
        </Group>
      </form>
    </Modal>
  )
}
