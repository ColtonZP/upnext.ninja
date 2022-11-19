'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import type { Game } from '../../../utils/types'

import { formatDate } from '../../../utils/helpers'
import styles from './styles.module.css'

export function GameCover({ game }: { game: Game }) {
  return (
    <Link href={`game/${game.slug}`} id={`game-cover-${game.id}`}>
      <motion.article
        layoutId={`${game.id}-cover`}
        className={styles.game}
        whileHover={{ scale: 1.06 }}
        style={{ backgroundImage: `url(https://${game.cover.url.replace('thumb', '720p')}` }}>
        <div className={styles.header}>
          S<small>{formatDate(game.first_release_date)}</small>
          <h4 className={styles.title}>{game.name}</h4>
        </div>
      </motion.article>
    </Link>
  )
}
