import axios from 'axios'

const omdbApi = import.meta.env.VITE_OMDB_API

export const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: omdbApi,
  },
})
