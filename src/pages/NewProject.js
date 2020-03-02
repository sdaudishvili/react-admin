import React, { useState } from 'react'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import TinyMCE from '../components/molecules/TinyMCE'
import TwoButtons from '../components/molecules/TwoButtons'
import Switcher from '../components/molecules/Switcher'
import Cropper from '../components/molecules/Cropper'
import Page from '../components/Page/Page'

function NewProject() {
  const [data, setData] = useState({ published: false })

  function handleInput(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  function handleTinyInput(e) {
    setData({ ...data, content: e.target.getContent() })
  }
  function getImageUrl(e) {
    setData({ ...data, [e.name]: e.value })
  }

  function onSubmit() {
    console.log(data)
  }

  function onCancel() {
    setData({ published: false })
  }
  function setPublishStatus() {
    setData({ ...data, published: !data.published })
  }

  const elems = [
    <Cropper label="Image" name="image" x={1200} y={630} getImageUrl={getImageUrl} />,
    <Cropper label="Share Image" name="shareImage" x={1200} y={630} getImageUrl={getImageUrl} />,
    <Input type="text" label="Title" value={data.title || ''} handleInput={handleInput} name="title" />,
    <Input type="text" label="Slug" value={data.slug || ''} handleInput={handleInput} name="slug" />,
    <Input
      type="text"
      label="Short description"
      value={data.shortDescription || ''}
      handleInput={handleInput}
      name="shortDescription"
    />,
    <TinyMCE label="Content" content={data.content || ''} handleInput={handleTinyInput} name="content" />,
    <Switcher
      label="Published"
      handleChange={setPublishStatus}
      name="published"
      isChecked={data.published}
    />,
    <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
  ]

  const head = <SectionHeader title="Information" />

  return <Page pageTitle="Projects" head={head} body={elems} />
}

export default NewProject
