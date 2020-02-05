import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

function TextBox(props) {
  return (
    <div className="row">
      <div className="col-lg-2 [ d-flex area--position--end-xs area--position--middle-xs ]">
        <label>{props.label}</label>
      </div>
      <div className="col-lg-8">
        <textarea type={props.type} onChange={props.handleInput} name={props.name} value={props.value} />
      </div>
    </div>
  )
}

export default TextBox
