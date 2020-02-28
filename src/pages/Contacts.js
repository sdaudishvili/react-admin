import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageHeader from '../components/atoms/PageHeader'
import Input from '../components/molecules/Input'
import TwoButtons from '../components/molecules/TwoButtons'
import SectionHeader from '../components/atoms/SectionHeader'
import Body from '../components/Body/Body'

import { fetchContacts, updateContacts } from '../redux/actions/contactsActions'

function Contacts(props) {
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()
  const [data, setData] = useState('')

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  useEffect(() => {
    setData({ phone: contacts.data.phone, email: contacts.data.email, address: contacts.data.address })
  }, [contacts.data.address, contacts.data.email, contacts.data.phone])

  function handleInput(event) {
    const { value } = event.target
    setData({ ...data, [event.target.name]: value })
  }

  function onSubmit() {
    dispatch(updateContacts(data))
  }

  function onCancel() {
    props.history.push('/')
  }

  const elems = [
    <Input type="text" label="Mobile" value={data.phone || ''} handleInput={handleInput} name="phone" />,
    <Input type="text" label="Email" value={data.email || ''} handleInput={handleInput} name="email" />,
    <Input type="text" label="Address" value={data.address || ''} handleInput={handleInput} name="address" />,
    <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
  ]

  return (
    <main id="main" role="main" className="contacts-wrapper">
      <PageHeader title="Contacts" />
      <section className="section-wrapper">
        <SectionHeader title="Information" />
        <Body>{elems}</Body>
      </section>
    </main>
  )
}

export default withRouter(Contacts)
