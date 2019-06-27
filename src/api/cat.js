import axios from 'axios';
const KEY = '1607456d-074a-43c1-a815-a0ec24872242';

export default axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search?',
    params: {
        breed_ids: query.slice(0,4)
    }
})