import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import TinyMCE from '../components/molecules/TinyMCE'
import TwoButtons from '../components/molecules/TwoButtons'
import ImageUploader from '../components/molecules/ImageUploader'
import Switcher from '../components/molecules/Switcher'
import Cropper from '../components/molecules/Cropper'
import Page from '../components/Page/Page'

import { uploadImage } from '../redux/actions/imageActions'

function NewProject() {
  const dispatch = useDispatch()
  const [data, setData] = useState({ published: false })

  function handleInput(event) {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  async function handelImageInput(event) {
    const name = event.target.name
    const file = await dispatch(uploadImage(event.target.files[0]))

    setData({ ...data, [name]: file.data.filename })
  }

  function handleTinyInput(e) {
    setData({ ...data, content: e.target.getContent() })
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
    <ImageUploader label="Image" handleInput={handelImageInput} name="image" image={data.image} />,
    <Cropper label="Image" name="croppedImage" />,
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
