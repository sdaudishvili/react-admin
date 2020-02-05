import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'

import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function CKeditorWrapper(props) {
  return (
    <div className="row">
      <div className="col-md-3 [ d-flex area--position--end-xs area--position--middle-xs ]">
        <label>{props.label}</label>
      </div>
      <div className="col-md-9">
        <CKEditor
          editor={ClassicEditor}
          data={props.data}
          onChange={(event, editor) => {
            props.handleInput(editor.getData())
          }}
          config={{ width: '10%' }}
        />
      </div>
    </div>
  )
}

export default CKeditorWrapper
