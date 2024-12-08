import { BASE_URL } from '@/constants/urls';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default { host: instance };
