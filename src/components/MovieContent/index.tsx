import Popup from 'reactjs-popup'
import { IMovies } from '../../interfaces/IMovies'
import { MovieContainer, MovieInfos } from './styles'
import svgImageNotFound from '../../assets/image-not-found.svg'
import { NavLink } from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import { Button } from '../Button'
import { FiPlus } from 'react-icons/fi'

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
            <strong>Title</strong>: {movie.Title}
          </p>
          <p>
            <strong>Year</strong>: {movie.Year}
          </p>
          <p>
            <strong>Type</strong>: {movie.Type}
          </p>
          <p>
            <strong>imdbID</strong>: {movie.imdbID}
          </p>

          <NavLink to={`/details/${movie.imdbID}`}>
            <Button title="info" icon={FiPlus} />
          </NavLink>
        </MovieInfos>
      </Popup>
    </MovieContainer>
  )
}
