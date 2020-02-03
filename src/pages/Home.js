import React from 'react'
import PageHeader from '../components/atoms/PageHeader'

function Home() {
  return (
    <main id="main" role="main" className="home-wrapper">
      <PageHeader title="Home" />
      <input type="file" />
    </main>
  )
}

export default Home
