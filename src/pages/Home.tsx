import { useCallback, useState } from 'react'
import { api } from '../services/api'

import svgImageNotFound from '../assets/image-not-found.svg'
import { Paginate } from '../components/Paginate'
import { NavLink } from 'react-router-dom'

import { IMovies } from '../interfaces/IMovies'

export function Home() {
  const [input, setInput] = useState<string>('')
  const [movies, setMovies] = useState<IMovies>([])
  const [totalPage, setTotalPage] = useState<number>(0)

  const handleSubmit = useCallback((value: string, page: number) => {
    api.get(`?apikey=8faa45f8&s=${value}&page=${page}`).then((data) => {
      setMovies(data.data.Search)
      setTotalPage(Math.ceil(data.data.totalResults / 10))
    })
  }, [])

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(input, 1)
        }}
      >
        <input
          type="text"
          placeholder="Procure seu Filme"
          value={input}
          onChange={(value) => setInput(value.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {movies && movies.length > 0 ? (
        movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : svgImageNotFound}
                alt="Poster do filme"
              />
              <NavLink to={`/details/${movie.imdbID}`}>+ info</NavLink>
            </div>
          )
        })
      ) : (
        <p>Nenhum resultado</p>
      )}

      {movies && movies.length > 0 && (
        <Paginate
          pageCount={totalPage}
          onPageChange={(selected) => handleSubmit(input, selected)}
        />
      )}
    </div>
  )
}
