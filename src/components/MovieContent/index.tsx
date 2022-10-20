import Popup from 'reactjs-popup'
import { NavLink } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import { Button } from '../Button'

import { IMovies } from '../../interfaces/IMovies'

import svgImageNotFound from '../../assets/image-not-found.svg'

import { MovieContainer, MovieInfos } from './styles'
import 'reactjs-popup/dist/index.css'

interface IMovieContent {
  movie: IMovies
}

export function MovieContent({ movie }: IMovieContent) {
  return (
    <MovieContainer>
      <Popup
        trigger={
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : svgImageNotFound}
            alt="Poster"
          />
        }
        arrow={false}
        position="center center"
      >
        <MovieInfos>
          <p>
            <strong>Título</strong>: {movie.Title}
          </p>
          <p>
            <strong>Ano</strong>: {movie.Year}
          </p>
          <p>
            <strong>Tipo</strong>: {movie.Type}
          </p>
          <p>
            <strong>ID</strong>: {movie.imdbID}
          </p>

          <NavLink to={`/details/${movie.imdbID}`}>
            <Button title="info" icon={FiPlus} />
          </NavLink>
        </MovieInfos>
      </Popup>
    </MovieContainer>
  )
}
