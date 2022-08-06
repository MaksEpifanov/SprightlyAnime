import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  headers: {
    'Content-type': 'application/json',
  },
});
