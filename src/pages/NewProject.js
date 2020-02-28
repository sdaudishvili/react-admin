import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import TinyMCE from '../components/molecules/TinyMCE'
import TwoButtons from '../components/molecules/TwoButtons'
import ImageUploader from '../components/molecules/ImageUploader'
import { uploadImage } from '../redux/actions/imageActions'
import Body from '../components/Body/Body'

function NewProject() {
  const dispatch = useDispatch()
  const [data, setData] = useState('')

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
    setData('')
  }

  const elems = [
    <ImageUploader label="Image" handleInput={handelImageInput} name="image" image={data.image} />,
    <Input type="text" label="Title" value={data.title || ''} handleInput={handleInput} name="title" />,
    <TinyMCE data={data.content || ''} label="Content" handleInput={handleTinyInput} name="content" />,
    <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
  ]

  return (
    <main id="main" role="main" className="projects-wrapper">
      <PageHeader title="Projects" />
      <section className="section-wrapper">
        <SectionHeader title="Information" />
        <Body>{elems}</Body>
      </section>
    </main>
  )
}

export default NewProject
