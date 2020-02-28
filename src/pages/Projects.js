import React from 'react'
import { withRouter } from 'react-router-dom'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import Body from '../components/Body/Body'
import '@material/mwc-fab'

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
          <mwc-fab mini icon="+" onClick={onClick}></mwc-fab>
        </div>
        <Body>{elems}</Body>
      </section>
    </main>
  )
}

export default withRouter(Projects)
