import React from "react";
import "./search-page.css";
import Toolbar from './navbar.js'; 


class Search2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      img: null
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.fetch(this.state.input);
  }

//   onInput = (e) => {
//     this.setState({ input: e.target.value });
//   }

  fetch = () => {
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then(res => res.json())
      .then(json => this.setState({
        img: json[0].url
      }))
      .catch(err => {
        console.error(err);
        this.setState({ img: null });
      });
  }

  render() {
    const { img } = this.state;
    return (
      <div style={{marginTop: '55px'}} className="searchApp">
        <Toolbar />
        <h1>Find a cat</h1>
        <section>
          <form onSubmit={this.onSubmit}>
            <label for="search-cat">Search cats: </label>
            {/* <input onInput={this.onInput} className="SearchBox" type="text" name="cat" required /> */}
            <input type="submit" value="Go!" />
          </form>
          { img ? <img src={img} /> : 'No image' }
        </section>
      </div>
    );
  }
}

export default Search2;