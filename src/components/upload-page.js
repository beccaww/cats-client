import React, { Component } from 'react'
import './upload-page.css'
//import Upload from './upload/Upload'

class UploadPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
          <Upload />
        </div>
      </div>
    )
  }
}

export default UploadPage;
