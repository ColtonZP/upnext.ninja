'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import type { Game } from '../../../utils/types'

export function Cover({ game }: { game: Game }) {
  return (
    <motion.div layoutId={`${game.id}-cover`}>
      <Image
        alt={`${game.name} Cover`}
        src={`https:${game.cover.url.replace('thumb', '720p')}`}
        width={270}
        height={360}
      />
    </motion.div>
  )
}
