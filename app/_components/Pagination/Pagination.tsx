'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Pagination() {
  const pathName = usePathname()
  // console.log({ pathName })

  return (
    <>
      {Array.from(Array(5).keys()).map(page => (
        <Link href={`games/${page + 1}`}>
          <button type="button" className="button-secondary">
            {page + 1}
          </button>
        </Link>
      ))}
    </>
  )
}
