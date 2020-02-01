import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import TwoButtons from '../components/molecules/TwoButtons'

import { fetchContacts } from '../redux/actions/contactsActions'

function Contacts() {
  const data = useSelector((state) => state.contacts.data)
  const dispatch = useDispatch()
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  useEffect(() => {
    setMobile(data.phone)
    setEmail(data.email)
    setAddress(data.address)
  }, [data.address, data.email, data.phone])

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

  function onSubmit() {}

  function onCancel() {
    setMobile('')
    setEmail('')
    setAddress('')
  }

  const elems = (
    <>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Mobile" value={mobile || ''} handleInput={handleInput} name="mobile" />
      </div>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Email" value={email || ''} handleInput={handleInput} name="email" />
      </div>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Address" value={address || ''} handleInput={handleInput} name="address" />
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
