import { FormEvent } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import styles from './styles.module.css'

type Target = {
  target: {
    search: { value: string }
  }
}

export function Header() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement> & Target) => {
    e.preventDefault()
    router.push(`/search?s=${e.target.search.value}`)
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <Link href="/">Games Up Next 🥷</Link>
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="search" type="text" />

        <button type="submit">
          <Image src="/assets/search.svg" height={18.5} width={18.5} alt="Search" />
        </button>
      </form>
    </header>
  )
}
