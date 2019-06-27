import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: 'Default text'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="cat-search">Cat Search</label>
                        <input onChange={this.handleChange} name='cat-search' type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;