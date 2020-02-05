import React from 'react'

function TwoButtons(props) {
  return (
    <div className="[ col-md-7 d-flex area--position--center-xs font--size--input ]">
      <button className="btn btn-primary [ mr-5 font--size--main ]" type="submit" onClick={props.onSubmit}>
        Save
      </button>
      <button className="btn btn-danger [ font--size--main ]" type="submit" onClick={props.onCancel}>
        Cancel
      </button>
    </div>
  )
}

export default TwoButtons
