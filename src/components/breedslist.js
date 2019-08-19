import React from 'react'; 
import Toolbar from './navbar'; 
import './cat-breeds.css';


const Breedslist = ({breeds}) => {
    return (
        <div>
            <Toolbar />
            <center><h1>List of Cat Breeds</h1></center>
            {breeds.map((breed) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-name">{breed.name}</h5>
                        <a href={breed.wikipedia_url} class="card-url">{breed.wikipedia_url}</a>
                        <p class="card-alt-name">{breed.alt_names}</p>
                        <p class="card-description">{breed.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Breedslist; 

