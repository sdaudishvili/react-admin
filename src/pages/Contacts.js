import React, { useState } from 'react'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import TwoButtons from '../components/molecules/TwoButtons'

function Contacts() {
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  function handleInput(event) {
    const { value } = event.target
    if (event.target.name === 'mobile') {
      setMobile(value)
    } else if (event.target.name === 'email') {
      setEmail(value)
    } else if (event.target.name === 'address') {
      setAddress(value)
    }
  }

  function onSubmit() {
    console.log('mobile', mobile)
    console.log('email', email)
    console.log('address', address)
  }

  function onCancel() {
    setMobile('')
    setEmail('')
    setAddress('')
  }

  const elems = (
    <>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Mobile" value={mobile} handleInput={handleInput} name="mobile" />
      </div>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Email" value={email} handleInput={handleInput} name="email" />
      </div>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Address" value={address} handleInput={handleInput} name="address" />
      </div>
      <div className="section-wrapper__body__item">
        <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </>
  )

  return (
    <main id="main" role="main" className="contacts-wrapper">
      <PageHeader title="Contacts" />
      <section className="section-wrapper">
        <div className="section-wrapper__header">
          <SectionHeader title="Information" />
        </div>
        <div className="section-wrapper__body">{elems}</div>
      </section>
    </main>
  )
}

export default Contacts
