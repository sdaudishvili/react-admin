import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Loader from '../components/molecules/Loader'
import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../components/atoms/SectionHeader'
import Input from '../components/molecules/Input'
import TwoButtons from '../components/molecules/TwoButtons'

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
    props.history.push('/')
  }

  function onCancel() {
    props.history.push('/')
  }

  const elem = (
    <>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Mobile" value={data.phone || ''} handleInput={handleInput} name="phone" />
      </div>
      <div className="section-wrapper__body__item">
        <Input type="text" label="Email" value={data.email || ''} handleInput={handleInput} name="email" />
      </div>
      <div className="section-wrapper__body__item">
        <Input
          type="text"
          label="Address"
          value={data.address || ''}
          handleInput={handleInput}
          name="address"
        />
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
        <div className="section-wrapper__body">{elem}</div>
        {contacts.loading && <Loader loading={contacts.loading} />}
      </section>
    </main>
  )
}

export default withRouter(Contacts)
