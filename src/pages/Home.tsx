import { useCallback } from 'react'
import { api } from '../services/api'

import svgImageNotFound from '../assets/image-not-found.svg'
import { Paginate } from '../components/Paginate'
import { NavLink } from 'react-router-dom'

import { useMovies } from '../hooks/Movies'
import { useFilters } from '../hooks/Filters'

export function Home() {
  const { movies, updateMovies } = useMovies()
  const { filters, updateFilters } = useFilters()

  const handleSubmit = useCallback(
    (value: string, page: number) => {
      api.get(`?apikey=8faa45f8&s=${value}&page=${page}`).then((data) => {
        updateMovies(data.data.Search)
        updateFilters({
          ...filters,
          page,
          totalPage: Math.ceil(data.data.totalResults / 10),
        })
      })
    },
    [filters, updateFilters, updateMovies],
  )

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(filters.value, 1)
        }}
      >
        <input
          type="text"
          placeholder="Procure seu Filme"
          value={filters.value}
          onChange={(value) =>
            updateFilters({
              ...filters,
              value: value.target.value,
            })
          }
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
          page={filters.page}
          pageCount={filters.totalPage}
          onPageChange={(selected) => handleSubmit(filters.value, selected)}
        />
      )}
    </div>
  )
}
