import React from 'react'

function Home({ id }) {
  return <div>Home {id}</div>
}

export async function getServerSideProps(context) {
  const { id } = context.query || { id: '1' }
  return {
    props: {
      id,
    },
  }
}

export default Home
