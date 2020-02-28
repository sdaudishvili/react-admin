import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import NewItemButton from '../components/atoms/NewItemButton'
import Body from '../components/Body/Body'

function Projects(props) {
  function onClick() {
    props.history.push('/projects/NewProject')
  }

  const elems = ['Projects']

  return (
    <main id="main" role="main" className="projects-wrapper">
      <PageHeader title="Projects" />
      <section className="section-wrapper">
        <div className="[ display--flex area--position--between-xs ]">
          <SectionHeader title="Information" />
          <NewItemButton onClick={onClick} />
        </div>
        <Body>{elems}</Body>
      </section>
    </main>
  )
}

export default withRouter(Projects)
