import React from 'react'
// import PageHeader from '../components/atoms/PageHeader'
import SectionHeader from '../atoms/SectionHeader'

function BodyItems(props) {
  const elems = props.elems.map((elem) => <div className="section-wrapper__body__item col-md-10">{elem}</div>)
  return (
    <>
      <section className="section-wrapper">
        <div className="section-wrapper__header">
          <SectionHeader title="Information" />
        </div>
        <div className="section-wrapper__body">{elems}</div>
      </section>
    </>
  )
}

export default BodyItems
