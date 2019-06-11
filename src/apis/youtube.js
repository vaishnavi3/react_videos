import axios from 'axios';

const KEY = 'AIzaSyB0oNYN3AHJA2o8B9f3oaLxV_1Mm4EAOHA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
