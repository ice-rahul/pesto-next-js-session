import React from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

function Page1() {
  return (
    <main className={styles.main}>
        Page 1 <br /> <br />
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/">Home</Link>
        <Link href="page1">Page 1</Link>
        <Link href="page2">Page 2</Link>
        <Link href="page3">Page 3</Link>
        <Link href="page4">Page 4</Link>
        <Link href="page5">Page 5</Link>
      </div>
    </main>
  )
}

export default Page1
