import React from 'react'

function Input(props) {
  return (
    <div className="row">
      <div className="col-md-3 [ d-flex area--position--end-xs area--position--middle-xs ]">
        <label>{props.label}</label>
      </div>
      <div className="col-md-9">
        <input type={props.type} onChange={props.handleInput} name={props.name} value={props.value} />
      </div>
    </div>
  )
}

export default Input
