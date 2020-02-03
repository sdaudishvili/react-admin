/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import TinyMCE from '../components/molecules/TinyMCE'
import TwoButtons from '../components/molecules/TwoButtons'
import ImageUploader from '../components/molecules/ImageUploader'
import { uploadImage } from '../redux/actions/imageActions'

require('babel-polyfill')

// http://localhost:3001/images/

function About() {
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
    setData({ ...data, [e.target.name]: e.target.getContent() })
  }

  function onSubmit() {
    console.log(data)
  }

  function onCancel() {
    setData('')
  }

  const elems = (
    <>
      <div className="section-wrapper__body__item">
        <ImageUploader label="Image" handleInput={handelImageInput} name="image" image={data.image} />
      </div>

      <div className="section-wrapper__body__item">
        <Input type="text" label="Title" value={data.title || ''} handleInput={handleInput} name="title" />
      </div>
      <div className="section-wrapper__body__item">
        <TinyMCE data={data.content || ''} label="Content" handleInput={handleTinyInput} name="content" />
      </div>
      <div className="section-wrapper__body__item">
        <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </>
  )

  return (
    <main id="main" role="main" className="projects-wrapper">
      <PageHeader title="Projects" />
      <section className="section-wrapper">
        <div className="section-wrapper__header">
          <SectionHeader title="Information" />
        </div>
        <div className="section-wrapper__body">{elems}</div>
      </section>
    </main>
  )
}

export default About
