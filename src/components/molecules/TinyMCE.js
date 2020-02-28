import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

const apiKey = '2xmvsr71p1sbv3i9ut4ya36qcvc90s9zzv7k0zgcwnu6mzv1'
const plugins = [
  'advlist autolink lists link image charmap print preview anchor',
  'searchreplace visualblocks code fullscreen',
  'insertdatetime media table paste code help wordcount'
]
const toolbar = `code | undo redo | formatselect | bold italic backcolor | 
alignleft aligncenter alignright alignjustify | 
bullist numlist outdent indent | removeformat | help`

function TinyMCE(props) {
  const TinyInit = {
    height: 500,
    menubar: true,
    plugins,
    toolbar,
    branding: false
  }

  return (
    <div className="row [ font--size--input ]">
      <div className="col-md-3 [ d-flex area--position--end-xs ]">
        <label>{props.label}</label>
      </div>
      <div className="col-md-9">
        <Editor apiKey={apiKey} initialValue={props.content} init={TinyInit} onChange={props.handleInput} />
      </div>
    </div>
  )
}
export default TinyMCE
