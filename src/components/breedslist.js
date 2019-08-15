import React from 'react'

const Breedslist = ({breeds}) => {
    return (
        <div>
            <center><h1>Breed List</h1></center>
            {breeds.map((breed) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{breed.name}</h5>
                        <h6 class="card-subtitle">{breed.wikipedia_url}</h6>
                        <p class="card-text">{breed.alt_names}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Breedslist; 

