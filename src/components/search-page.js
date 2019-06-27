import React from 'react';
import SearchBar from './searchbar';
import cat from '../api/cat';

class Search extends React.Component {
    state = {
        cats: [],
        selectedCat: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await cat.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            cats: response.data.items
        })
    };
    handleCatSelect = (catImage) => {
        this.setState({selectedCat: catImage})
    }

    render() {
        return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            {/* <VideoDetail video={this.state.selectedVideo}/> */}
                        </div>
                        <div className="five wide column">
                            {/* <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;