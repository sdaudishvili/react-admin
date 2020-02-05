import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import TwoButtons from '../components/molecules/TwoButtons'
import TinyMCE from '../components/molecules/TinyMCE'
import BodyItem from '../components/atoms/BodyItem'

import { fetchAbout, updateAbout } from '../redux/actions/aboutActions'

function About(props) {
  const about = useSelector((state) => state.about)
  const dispatch = useDispatch()
  const [data, setData] = useState('')

  useEffect(() => {
    dispatch(fetchAbout())
  }, [dispatch])

  useEffect(() => {
    setData({ title: about.data.title, content: about.data.content })
  }, [about.data.content, about.data.title])

  function handleInput(event) {
    const { value } = event.target
    setData({ ...data, [event.target.name]: value })
  }

  function handleTinyInput(e) {
    setData({ ...data, content: e.target.getContent() })
  }

  function onSubmit() {
    dispatch(updateAbout(data))
  }

  function onCancel() {
    props.history.push('/')
  }

  const elem = (
    <>
      <BodyItem>
        <Input type="text" label="Title" value={data.title || ''} handleInput={handleInput} name="title" />
      </BodyItem>
      <BodyItem>
        <TinyMCE
          initialValue={data.content || ''}
          label="Content"
          handleInput={handleTinyInput}
          name="content"
        />
      </BodyItem>
      <BodyItem>
        <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
      </BodyItem>
    </>
  )
  return (
    <main id="main" role="main" className="about-wrapper">
      <PageHeader title="About" />
      <section className="section-wrapper">
        <div className="section-wrapper__header">
          <SectionHeader title="Information" />
        </div>
        <div className="section-wrapper__body">{elem}</div>
      </section>
    </main>
  )
}

export default withRouter(About)
