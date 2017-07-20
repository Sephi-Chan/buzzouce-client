import axios from 'axios';
import { API_HOSTNAME, API_PORT } from 'components/config'

export const ajax = axios.create({
  baseURL: `http://${API_HOSTNAME}:${API_PORT}/api`,
  timeout: 1000
});
