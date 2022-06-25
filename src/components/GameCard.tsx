import React from 'react'
import {
  Button,
  createStyles,
  Paper,
  Title,
  Text,
  Menu,
  Stack,
} from '@mantine/core'
import { ArrowRight, PlaylistAdd } from 'tabler-icons-react'
import { Link } from 'react-location'
import { Game } from '../lib/types'

const lists = ['wishlist', 'playlist']

type Props = {
  game: Game
}

export const GameCard = ({ game }: Props) => {
  const { classes } = useStyles()

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('game', JSON.stringify(game))
  }

  return (
    <Paper
      onDragStart={handleDrag}
      id={game.slug}
      className={classes.card}
      draggable
      shadow="md"
      radius="md"
      sx={{ backgroundImage: `url(${game.background_image})` }}>
      <div className={classes.info}>
        <Text className={classes.category} size="xs" m={0}>
          {game.released}
        </Text>
        <Title order={3} className={classes.title}>
          {game.name}
        </Title>
      </div>

      <Stack
        align="flex-start"
        justify="flex-start"
        spacing="xs"
        px="xs"
        pb="xs">
        <Menu
          control={
            <Button className={classes.listSelect} size="sm" px={5}>
              <PlaylistAdd size={24} width={24} />
            </Button>
          }
          transition="pop-top-left"
          placement="start">
          {lists.map(list => (
            <Menu.Item>{list}</Menu.Item>
          ))}
        </Menu>

        <Button
          variant="white"
          color="dark"
          rightIcon={<ArrowRight />}
          component={Link}
          to={`game/${game.slug}`}>
          Learn More
        </Button>
      </Stack>
    </Paper>
  )
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
    backgroundColor:
      theme.colorScheme === 'dark'
        ? 'rgba(0, 0, 0, 0.4)'
        : 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(8px)',
    padding: theme.spacing.xs,
  },

  title: {
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    lineHeight: 1.2,
    fontSize: 36,
  },

  category: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    opacity: 0.8,
    fontWeight: 700,
  },

  menu: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  listSelect: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.black,
    color: theme.colorScheme === 'dark' ? theme.black : theme.white,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[4]
          : theme.colors.dark[4],
    },
  },
}))
