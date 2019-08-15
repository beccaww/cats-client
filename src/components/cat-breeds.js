import React, { Component } from 'react';
import Breedslist from './breedslist'; 

class Breeds extends Component {
    render() {
        return (
            <Breedslist breeds={this.state.breeds} />
        )
    }

  state = {
      breeds: []
  };

   componentDidMount() {
      fetch(`https://api.thecatapi.com/v1/breeds`)
      .then(res => res.json())
      .then((data) => {
          this.setState({ breeds: data })
      })
      .catch(console.log)
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