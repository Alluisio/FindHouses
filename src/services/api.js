import axios from 'axios';
import { API_URL, XRAPIDAPIKEY, XRAPIAPIHOST } from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': XRAPIDAPIKEY,
    'x-rapidapi-host': XRAPIAPIHOST,
    useQueryString: true,
  },
});

export default api;
