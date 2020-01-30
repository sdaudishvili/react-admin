import React, { useState } from 'react'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import TinyMCE from '../components/molecules/TinyMCE'
import TwoButtons from '../components/molecules/TwoButtons'
import ImageUploader from '../components/molecules/ImageUploader'

function About() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function handleInput(event) {
    const { value } = event.target
    if (event.target.name === 'title') {
      setTitle(value)
    } else if (event.target.name === 'content') {
      setContent(value)
    }
  }

  function handleTinyInput(e) {
    setContent(e.target.getContent())
  }

  function onSubmit() {}

  function onCancel() {
    setTitle('')
    setContent('')
  }

  const elems = (
    <>
      <div className="section-wrapper__body__item">
        <ImageUploader label="Image" handleInput={handleInput} name="ImageUploader" />
      </div>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Title" value={title} handleInput={handleInput} name="title" />
      </div>
      <div className="section-wrapper__body__item">
        <TinyMCE data={content} label="Content" handleInput={handleTinyInput} name="content" />
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
