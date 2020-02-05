import React from 'react'

function ImageUploader(props) {
  return (
    <>
      <div className="row">
        <div className="col-lg-2 [ d-flex area--position--end-xs area--position--middle-xs ]">
          <label>{props.label}</label>
        </div>
        <div className="col-lg-8">
          <input type="file" onChange={props.handleInput} name={props.name} />
        </div>
      </div>
      {props.image && <img src={`http://localhost:3001/images/${props.image}`} alt="" />}
    </>
  )
}

export default ImageUploader
