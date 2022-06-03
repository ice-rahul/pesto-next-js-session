import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

function Index() {
  const router = useRouter()
  const { params } = router.query
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="#">Project {params?.join(',')}</a>
      </h1>

      <div className={styles.grid}>
        <Link href="/news/1/2">
          <a className={styles.card}>
            <h2>News 1 &rarr;</h2>
          </a>
        </Link>

        <Link href="/news/1/2/3">
          <a className={styles.card}>
            <h2>News 2 &rarr;</h2>
          </a>
        </Link>

        <Link href="/news/9/10">
          <a className={styles.card}>
            <h2>News 3 &rarr;</h2>
          </a>
        </Link>

        <Link href="/news/6/5/4/3">
          <a className={styles.card}>
            <h2>News 4 &rarr;</h2>
          </a>
        </Link>
      </div>
    </main>
  )
}

export default Index
