import React from 'react'
import BodyItem from './BodyItem'

function Body(props) {
  const elems = props.children.map((e) => <BodyItem key={e.toString()}>{e}</BodyItem>)
  return <div className="section-wrapper__body">{elems}</div>
}

export default Body
