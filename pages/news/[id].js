import React from 'react'

function Home(props) {
  const { newsId } = props
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontSize: '2em',
        fontWeight: 'bold',
      }}
    >
      {newsId}
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: 'project1' },
      },
      {
        params: { id: 'project2' },
      },
    ],
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context
  return {
    props: { newsId: id },
  }
}

export default Home
