import { use } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { fetchGame } from '../../../utils/api'
import { Banner } from './Banner'
import { Cover } from './Cover'
import styles from './styles.module.css'

export default function Page({ params }: { params: { game: string } }) {
  const game = use(fetchGame(params.game))

  return (
    <main>
      <Banner game={game[0]} />

      <section className={styles.section}>
        <Cover game={game[0]} />

        <div className={styles.details}>
          <h1>{game[0].name}</h1>
          <p>{game[0].summary}</p>
          <button type="button">Add to list</button>
        </div>
      </section>
    </main>
  )
}
