'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import type { Game } from '../../../utils/types'

import styles from './styles.module.css'

export function Banner({ game }: { game: Game }) {
  return (
    <div className={styles.banner}>
      <Image
        fill
        alt={`${game.name} artwork`}
        src={`https://${game?.artworks?.[0].url.replace('thumb', '1080p') || game.cover.url.replace('thumb', '1080p')}`}
        className="skeleton"
      />
    </div>
  )
}
