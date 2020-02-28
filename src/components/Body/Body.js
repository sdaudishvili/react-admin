import React from 'react'
import BodyItem from './BodyItem'

const generateElement = (e) => <BodyItem key={e.toString()}>{e}</BodyItem>

const Body = (props) => <div className="section-wrapper__body">{props.children.map(generateElement)}</div>

export default Body
