import React from 'react'
import SectionBody from './SectionBody'
import PageHeader from '../atoms/PageHeader'
import SectionHead from './SectionHead'

function Page(props) {
  return (
    <main id="main" role="main">
      <PageHeader title="Projects" />
      <section className="section-wrapper">
        <SectionHead>{props.head}</SectionHead>
        <SectionBody>{props.body}</SectionBody>
      </section>
    </main>
  )
}

export default Page
