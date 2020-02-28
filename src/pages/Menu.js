import React, { useState } from 'react'
import PageHeader from '../components/atoms/PageHeader'
import Input from '../components/molecules/Input'
import slugGenerator from '../plugins/SlugGenerator'
import SectionHeader from '../components/atoms/SectionHeader'
import Body from '../components/Body/Body'

function Menu() {
  const [inp, setInp] = useState('')
  const [slug, setSlug] = useState('')

  function getInpt(e) {
    const { value } = e.target
    setInp(value)
    setSlug(slugGenerator(value.toLowerCase()))
  }

  function getSlugInpt(e) {
    const { value } = e.target
    setSlug(`${value}`)
  }
  const elems = [
    <Input type="text" label="Title" value={inp} handleInput={getInpt} name="title" />,
    <Input type="text" label="Slug" value={slug} handleInput={getSlugInpt} name="title" />
  ]

  return (
    <main id="main" role="main" className="home-wrapper">
      <PageHeader title="Menu" />
      <section className="section-wrapper">
        <SectionHeader title="Menu" />
        <Body>{elems}</Body>
      </section>
    </main>
  )
}

export default Menu
