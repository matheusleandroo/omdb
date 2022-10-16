import Popup from 'reactjs-popup'
import { IMovies } from '../../interfaces/IMovies'
import { MovieContainer } from './styles'
import svgImageNotFound from '../../assets/image-not-found.svg'
import { NavLink } from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import { Button } from '../Button'

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
            alt="Poster do filme"
          />
        }
        position="center center"
      >
        <div>
          <p>Title: {movie.Title}</p>
          <p>Year: {movie.Year}</p>
          <p>Type: {movie.Type}</p>
          <p>imdbID: {movie.imdbID}</p>

          <NavLink to={`/details/${movie.imdbID}`}>
            <Button title="+ info" />
          </NavLink>
        </div>
      </Popup>
    </MovieContainer>
  )
}
