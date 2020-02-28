import React from 'react'
import { withRouter } from 'react-router-dom'
import SectionHeader from '../components/atoms/SectionHeader'
import Page from '../components/Page/Page'
import '@material/mwc-fab'

function Projects(props) {
  function onClick() {
    props.history.push('/projects/NewProject')
  }

  const elems = ['Projects']
  const head = (
    <div className="[ display--flex area--position--between-xs ]">
      <SectionHeader title="Information" />
      <mwc-fab mini icon="+" onClick={onClick}></mwc-fab>
    </div>
  )

  return <Page pageTitle="Projects" head={head} body={elems} />
}

export default withRouter(Projects)
