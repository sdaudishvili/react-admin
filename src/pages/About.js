import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Input from '../components/molecules/Input'
import TwoButtons from '../components/molecules/TwoButtons'
import TinyMCE from '../components/molecules/TinyMCE'
import Page from '../components/Page/Page'
import SectionHeader from '../components/atoms/SectionHeader'

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

  const elems = [
    <Input type="text" label="Title" value={data.title || ''} handleInput={handleInput} name="title" />,
    <TinyMCE
      initialValue={data.content || ''}
      label="Content"
      handleInput={handleTinyInput}
      name="content"
    />,
    <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
  ]

  const head = <SectionHeader title="Information" />

  return <Page pageTitle="About" head={head} body={elems} />
}

export default withRouter(About)
