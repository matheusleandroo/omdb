import { useCallback, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { api } from '../../services/api'

import { useMovie } from '../../hooks/Movie'

import { Button } from '../../components/Button'
import { Spinner } from '../../components/Spinner'

import svgImageNotFound from '../../assets/image-not-found.svg'

import { DetailsContent, DetailsImg } from './styles'

export function Details() {
  const { movie, updateMovie } = useMovie()

  const { id } = useParams<{ id: string }>()

  const getMovie = useCallback(() => {
    api.get(`?i=${id}`).then((data) => {
      updateMovie(data.data)
    })
  }, [id, updateMovie])

  useEffect(() => {
    getMovie()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [getMovie])

  return (
    <>
      {!movie ? (
        <DetailsContent>
          <Spinner isLoading />
        </DetailsContent>
      ) : (
        <DetailsContent>
          <h1>Informações sobre {movie?.Title}</h1>

          <p>
            <strong>Título: </strong>
            {movie?.Title}
          </p>
          <p>
            <strong>Ano: </strong>
            {movie?.Year}
          </p>
          <p>
            <strong>Classificação: </strong>
            {movie?.Rated}
          </p>
          <p>
            <strong>Lançamento: </strong>
            {movie?.Released}
          </p>
          <p>
            <strong>Gênero: </strong>
            {movie?.Genre}
          </p>
          <p>
            <strong>Diretor: </strong>
            {movie?.Director}
          </p>
          <p>
            <strong>Escritor: </strong>
            {movie?.Writer}
          </p>
          <p>
            <strong>Atores: </strong>
            {movie?.Actors}
          </p>
          <p>
            <strong>Enredo: </strong>
            {movie?.Plot}
          </p>
          <p>
            <strong>Idioma: </strong>
            {movie?.Language}
          </p>
          <p>
            <strong>País: </strong>
            {movie?.Country}
          </p>
          <p>
            <strong>Prêmios: </strong>
            {movie?.Awards}
          </p>
          <p>
            <strong>Metascore: </strong>
            {movie?.Metascore}
          </p>
          <p>
            <strong>Avaliação do imdb: </strong>
            {movie?.imdbRating}
          </p>
          <p>
            <strong>Votos do imdb: </strong>
            {movie?.imdbVotes}
          </p>
          <p>
            <strong>Tipo: </strong>
            {movie?.Type}
          </p>
          <p>
            <strong>ID: </strong>
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
    </>
  )
}
