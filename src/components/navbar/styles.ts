import { createStyles } from '@mantine/core'

export const linkStyles = createStyles(theme => ({
  listHeader: {
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    textDecoration: 'none',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: 'inherit',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][7],
    },
  },

  validDragOver: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][5], 0.5)
        : theme.colors[theme.primaryColor][2],
    color: theme.colorScheme === 'dark' ? theme.white : theme.colors[theme.primaryColor][7],
  },

  invalidDragOver: {
    backgroundColor: theme.fn.rgba(theme.colors.red[5], 0.5),
    color: theme.colors.red[7],
    cursor: 'not-allowed',
  },
}))
