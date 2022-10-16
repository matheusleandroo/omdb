interface IMovie {
  Title: string
  Year: string
  Type: string
  imdbID: string
  Poster: string
}

export interface IMovies extends Array<IMovie> {}
