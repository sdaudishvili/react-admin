import React, { useState } from 'react'
import PageHeader from '../components/atoms/PageHeader'
import Input from '../components/molecules/Input'
import SectionHeader from '../components/atoms/SectionHeader'
import slugGenerator from '../plugins/SlugGenerator'
import BodyItem from '../components/atoms/BodyItem'

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
  const elems = (
    <>
      <BodyItem>
        <Input type="text" label="Title" value={inp} handleInput={getInpt} name="title" />
      </BodyItem>
      <BodyItem>
        <Input type="text" label="Title" value={slug} handleInput={getSlugInpt} name="title" />
      </BodyItem>
    </>
  )
  return (
    <main id="main" role="main" className="home-wrapper">
      <PageHeader title="Menu" />
      <section className="section-wrapper">
        <div className="section-wrapper__header">
          <SectionHeader title="Menu" />
        </div>
        <div className="section-wrapper__body">{elems}</div>
      </section>
    </main>
  )
}

export default Menu
