import React, { useState } from 'react'
import PageHeader from '../components/atoms/PageHeader'
import Input from '../components/molecules/Input'
import slugGenerator from '../plugins/SlugGenerator'
import BodyItems from '../components/organisms/BodyItems'

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
    <Input type="text" label="Title" value={slug} handleInput={getSlugInpt} name="title" />
  ]
  return (
    <main id="main" role="main" className="home-wrapper">
      <PageHeader title="Menu" />
      <BodyItems elems={elems} />
    </main>
  )
}

export default Menu
