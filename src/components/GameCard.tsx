import { DragEvent, useMemo } from 'react'
import { Link } from 'react-location'
import {
  Button,
  createStyles,
  Paper,
  Title,
  Text,
  Menu,
  Stack,
  ActionIcon,
  Group,
  useMantineTheme,
} from '@mantine/core'
import { ArrowRight, Circle, CircleCheck, CircleMinus, CirclePlus, PlaylistAdd } from 'tabler-icons-react'

import dingSound from '../assets/ding.mp3'
import { Game, MinifiedGame, Playlist } from '../lib/types'
import { useStore } from '../lib/store'

type Props = {
  game: Game | MinifiedGame
  playlist?: Playlist
}

export const GameCard = ({ game, playlist }: Props) => {
  const ding = new Audio(dingSound)
  const theme = useMantineTheme()
  const { classes } = useStyles()
  const { playlists, addGame, removeGame, updateDragId, toggleCompletedGame } = useStore()

  const isInPlaylist: Record<string, boolean> = useMemo(
    () =>
      playlists.reduce(
        (lists, list) => ({
          ...lists,
          [list.id]: !!list.games.find(findGame => findGame.id === game.id),
        }),
        {},
      ),
    [playlists],
  )

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('game', JSON.stringify(game))
    updateDragId(game.id)
  }

  const handleDragEnd = () => {
    updateDragId(-1)
  }

  const handleListSelect = (id: string) => {
    if (isInPlaylist[id]) removeGame(id, game)
    else addGame(id, game)
  }

  const formatDate = (date: string) => {
    const newDate = new Date(date)
    return newDate.toLocaleString('default', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    })
  }

  const handleCompleteGame = (gameId: number, completed: boolean) => {
    if (!completed) ding.play()
    if (playlist) toggleCompletedGame(playlist.id, gameId, !completed)
  }

  return (
    <Paper
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      id={game.slug}
      className={classes.card}
      draggable
      shadow="md"
      radius="md"
      sx={{ backgroundImage: `url(${game.background_image})` }}>
      <div className={classes.info}>
        <Group position="apart">
          <Text className={classes.category} size="xs" m={0}>
            {formatDate(game.released)}
          </Text>
          {'completed' in game && (
            <ActionIcon onClick={() => handleCompleteGame(game.id, game.completed)} className={classes.check}>
              {game.completed ? <CircleCheck size={24} color={theme.colors.green[4]} /> : <Circle size={24} />}
            </ActionIcon>
          )}
        </Group>

        <Title order={3} className={classes.title}>
          {game.name}
        </Title>
      </div>

      <Stack align="flex-start" justify="flex-start" spacing="xs" px="xs" pb="xs">
        <Menu
          control={
            <Button className={classes.listSelect} size="sm" px={5}>
              <PlaylistAdd size={24} width={24} />
            </Button>
          }
          transition="pop-top-left"
          placement="start">
          {playlists.map(list => (
            <Menu.Item
              key={`${list.id}-options`}
              onClick={() => handleListSelect(list.id)}
              icon={
                isInPlaylist[list.id] ? <CircleMinus size={16} color="red" /> : <CirclePlus size={16} color="green" />
              }>
              {list.title}
            </Menu.Item>
          ))}
        </Menu>

        <Button variant="white" color="dark" rightIcon={<ArrowRight />} component={Link} to={`/game/${game.slug}`}>
          Learn More
        </Button>
      </Stack>
    </Paper>
  )
}

GameCard.defaultProps = {
  playlist: null,
}

const useStyles = createStyles(theme => ({
  card: {
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
  },

  info: {
    width: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(8px)',
    padding: theme.spacing.xs,
  },

  title: {
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    lineHeight: 1.2,
    fontSize: 28,
  },

  category: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    opacity: 0.8,
    fontWeight: 700,
  },

  listSelect: {
    backgroundColor: theme.white,
    color: theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark[4],
    },
  },

  check: {
    '&:hover': {
      background: 'none',
    },
  },
}))
