import React, { useState } from 'react'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import CKeditorWrapper from '../components/molecules/CKeditorWrapper'
import TwoButtons from '../components/molecules/TwoButtons'

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

  function handleCkInput(data) {
    setContent(data)
  }

  function onSubmit() {}

  function onCancel() {
    setTitle('')
    setContent('')
  }

  const elems = (
    <>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Title" value={title} handleInput={handleInput} name="title" />
      </div>
      <div className="section-wrapper__body__item">
        <CKeditorWrapper data={content} label="Content" handleInput={handleCkInput} name="content" />
      </div>
      <div className="section-wrapper__body__item">
        <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </>
  )

  return (
    <main id="main" role="main" className="about-wrapper">
      <PageHeader title="About" />
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
