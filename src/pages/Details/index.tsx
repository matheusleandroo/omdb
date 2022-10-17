import { useCallback, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../services/api'

import svgImageNotFound from '../../assets/image-not-found.svg'

import { useMovie } from '../../hooks/Movie'
import { Button } from '../../components/Button'

import { DetailsContainer, DetailsContent, DetailsImg } from './styles'

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
    <DetailsContainer>
      {movie &&
      Object.keys(movie).length === 0 &&
      Object.getPrototypeOf(movie) === Object.prototype ? (
        <p>Carregando</p>
      ) : (
        <DetailsContent>
          <h1>Informações sobre {movie?.Title}</h1>

          <p>
            <strong>Title: </strong>
            {movie?.Title}
          </p>
          <p>
            <strong>Year: </strong>
            {movie?.Year}
          </p>
          <p>
            <strong>Rated: </strong>
            {movie?.Rated}
          </p>
          <p>
            <strong>Released: </strong>
            {movie?.Released}
          </p>
          <p>
            <strong>Genre: </strong>
            {movie?.Genre}
          </p>
          <p>
            <strong>Director: </strong>
            {movie?.Director}
          </p>
          <p>
            <strong>Writer: </strong>
            {movie?.Writer}
          </p>
          <p>
            <strong>Actors: </strong>
            {movie?.Actors}
          </p>
          <p>
            <strong>Plot: </strong>
            {movie?.Plot}
          </p>
          <p>
            <strong>Language: </strong>
            {movie?.Language}
          </p>
          <p>
            <strong>Country: </strong>
            {movie?.Country}
          </p>
          <p>
            <strong>Awards: </strong>
            {movie?.Awards}
          </p>
          <p>
            <strong>Metascore: </strong>
            {movie?.Metascore}
          </p>
          <p>
            <strong>imdbRating: </strong>
            {movie?.imdbRating}
          </p>
          <p>
            <strong>imdbVotes: </strong>
            {movie?.imdbVotes}
          </p>
          <p>
            <strong>Type: </strong>
            {movie?.Type}
          </p>
          <p>
            <strong>imdbID: </strong>
            {movie?.imdbID}
          </p>
          <DetailsImg>
            <img
              src={movie?.Poster !== 'N/A' ? movie?.Poster : svgImageNotFound}
              alt="Poster do filme"
            />
          </DetailsImg>

          <NavLink to="/listing" onClick={() => updateMovie(null)}>
            <Button title="Voltar" />
          </NavLink>
        </DetailsContent>
      )}
    </DetailsContainer>
  )
}
