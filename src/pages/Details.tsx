import { useCallback, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../services/api'

import svgImageNotFound from '../assets/image-not-found.svg'

import { useMovie } from '../hooks/Movie'

export function Details() {
  const { movie, updateMovie } = useMovie()

  const { id } = useParams<{ id: string }>()

  const getMovie = useCallback(() => {
    api.get(`?apikey=8faa45f8&i=${id}`).then((data) => {
      updateMovie(data.data)
    })
  }, [id, updateMovie])

  useEffect(() => {
    getMovie()
  }, [getMovie])

  return (
    <>
      {movie &&
      Object.keys(movie).length === 0 &&
      Object.getPrototypeOf(movie) === Object.prototype ? (
        <p>Carregando</p>
      ) : (
        <>
          <p>{movie?.Title}</p>
          <p>{movie?.Year}</p>
          <p>{movie?.Rated}</p>
          <p>{movie?.Released}</p>
          <p>{movie?.Genre}</p>
          <p>{movie?.Director}</p>
          <p>{movie?.Writer}</p>
          <p>{movie?.Actors}</p>
          <p>{movie?.Plot}</p>
          <p>{movie?.Language}</p>
          <p>{movie?.Country}</p>
          <p>{movie?.Awards}</p>
          <p>{movie?.Metascore}</p>
          <p>{movie?.imdbRating}</p>
          <p>{movie?.imdbVotes}</p>
          <p>{movie?.Type}</p>
          <p>{movie?.imdbID}</p>
          <img
            src={movie?.Poster !== 'N/A' ? movie?.Poster : svgImageNotFound}
            alt="Poster do filme"
          />

          <NavLink to="/" onClick={() => updateMovie(null)}>
            Voltar
          </NavLink>
        </>
      )}
    </>
  )
}
