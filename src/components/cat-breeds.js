import React from 'react';
import Toolbar from './navbar';
import './cat-breeds.css'; 

class Breeds extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        input: '',
        list: null
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
      fetch(`https://api.thecatapi.com/v1/breeds`)
      .then(res => res.json())
      .then(json => this.setState({
        list: json[0].url
      }))
      .catch(err => {
        console.error(err);
        this.setState({ list: null });
      });
  }
  
    render() {
      const { list } = this.state;
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
          </section>
        </div>
      );
    }
  }
  
  export default Breeds;




// const Breeds = props => (
//     <header className="titleOfBreeds">
//         <h1>List of Cat Breeds: </h1>
//         <ul>
//             <li>Abyssinian</li>
//             <li>Balinese</li>
//             <li>Bengal</li>
//             <li>Birman</li>
//             <li>Bombay</li>
//             <li>Chartreux</li>
//             <li>Himalayan </li>
//             <li>Korat</li>
//             <li>LaPerm</li>
//             <li>Manx</li>
//             <li>Ocicat</li>
//             <li>Oriental</li>
//             <li>Persian</li>
//             <li>Pixiebob</li>
//             <li>Ragamuffin</li>
//             <li>Ragdoll</li>
//             <li>Savannah</li>
//             <li>Siamese</li>
//             <li>Siberian</li>
//             <li>Singapura</li>
//             <li>Somali</li>
//             <li>Sphynx</li>
//             <li>Tonkinese</li>
//             <li>Toyger</li>
//         </ul>
//     </header>
  
// )

// export default Breeds; 