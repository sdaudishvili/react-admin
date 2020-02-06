import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import NewItemButton from '../components/atoms/NewItemButton'

function Projects(props) {
  function onClick() {
    props.history.push('/projects/NewProject')
  }
  return (
    <main id="main" role="main" className="projects-wrapper">
      <PageHeader title="Projects" />
      <section className="section-wrapper">
        <div className="section-wrapper__header [ display--flex area--position--between-xs ]">
          <SectionHeader title="Information" />
          <NewItemButton onClick={onClick} />
        </div>
        <div className="section-wrapper__body">Projects</div>
      </section>
    </main>
  )
}

export default withRouter(Projects)
