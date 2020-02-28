import React, { useState } from 'react'
import Input from '../components/molecules/Input'
import slugGenerator from '../plugins/SlugGenerator'
import SectionHeader from '../components/atoms/SectionHeader'
import Page from '../components/Page/Page'

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

  const head = <SectionHeader title="Menu" />

  return <Page pageTitle="Menu" head={head} body={elems} />
}

export default Menu
