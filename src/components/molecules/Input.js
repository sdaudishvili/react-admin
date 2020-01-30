import React from 'react'

function Input(props) {
  return (
    <div className="row [ font--size--input ]">
      <div className="col-lg-2 [ d-flex area--position--end-xs area--position--middle-xs ]">
        <label>{props.label}</label>
      </div>
      <div className="col-lg-8">
        <input type={props.type} onChange={props.handleInput} name={props.name} value={props.value} />
      </div>
    </div>
  )
}

export default Input
