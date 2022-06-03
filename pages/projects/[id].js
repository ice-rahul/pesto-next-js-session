import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

function Index() {
  const router = useRouter()
  const { id } = router.query
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="#">Project {id}</a>
      </h1>

      <div className={styles.grid}>
        <Link href="/projects/1">
          <a className={styles.card}>
            <h2>Project 1 &rarr;</h2>
          </a>
        </Link>

        <Link href="/projects/2">
          <a className={styles.card}>
            <h2>Project 2 &rarr;</h2>
          </a>
        </Link>

        <Link href="/projects/3">
          <a className={styles.card}>
            <h2>Project 3 &rarr;</h2>
          </a>
        </Link>

        <Link href="/projects/4">
          <a className={styles.card}>
            <h2>Project 4 &rarr;</h2>
          </a>
        </Link>
      </div>
    </main>
  )
}

export default Index
