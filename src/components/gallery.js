import React, { Component } from 'react';
import axios from "axios";
import ReactGallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { loadAuthToken } from "../local-storage";

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images : [],
            currentImage: 0,
            lightboxIsOpen: false
        };
    }

    componentDidMount() {
        console.log("auth");
        axios({
          method: "GET",
          url: "http://localhost:8080/api/images/",
          headers: { authorization: `Bearer ${loadAuthToken()}` }
        }).then(response => {
            console.log(response.data); 
          this.setState({
            images: response.data.array
          });
        });
      }

    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    render() {
        let photos = this.state.images.map(image => {
            return {
                src : '/api/images' + image.uri,
                width : image.width,
                height : image.height,
                id :  image.id
            }
        });
        if (!this.state.images.length) return null; 
        return (
            <div className="gallery">
                {this.state.images.length ?
                    <ReactGallery
                        photos={photos}
                        onClick={this.openLightbox.bind(this)}
                    />
                    :
                    <div className="no-images">
                        <h5 className="text-center">
                            You currently have no images in your photos gallery
                        </h5>
                    </div>
                }

                <Lightbox images={photos}
                          onClose={this.closeLightbox.bind(this)}
                          onClickPrev={this.gotoPrevious.bind(this)}
                          onClickNext={this.gotoNext.bind(this)}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}/>
            </div>

        );
    }
}