import React, { Component } from 'react';
import './upload-page.css';
import Upload from './upload';
import axios from 'axios'; 
import Toolbar from './navbar';

class UploadPage extends Component {
  state = { 
    selectedFile: null
  }
  
  fileSelectedHandler = event => {
    console.log(event.target.files[0]); 
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData(); 
    fd.append('imageField', this.state.selectedFile, this.state.selectedFile.name); 
    axios.post('http://localhost:8080/api/images', fd, {
      onUploadProgress: progressEvent => {
        console.log('Upload Progress:' + Math.round(progressEvent.loaded / progressEvent.total* 100) + '%')
      }
    })
      .then(res => {
        console.log(res); 
      });
    }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <input type="file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    )
  }
}

export default UploadPage;
