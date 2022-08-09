import axios, { AxiosInstance } from 'axios';

const coreUrl = import.meta.env.VITE_CORE_URL;

let coreAxiosInstance: AxiosInstance;

function getCoreInstance(): AxiosInstance {
  if (!coreAxiosInstance) {
    coreAxiosInstance = axios.create({
      baseURL: `${coreUrl}/`,
      headers: {
        Source: 'rest-api',
        Accept: 'application/json',
      },
    });
  }
  return coreAxiosInstance;
}

export const coreApiInstance: AxiosInstance = getCoreInstance();
