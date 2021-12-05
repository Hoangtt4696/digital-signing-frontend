import axios from 'axios';

export default axios.create({
  baseURL: process.env.APP_API || 'http:127.0.0.1:3000/api/v1',
  responseType: 'json',
  headers: {
    Accept: 'application/json',
  },
});
