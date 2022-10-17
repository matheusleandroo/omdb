import { useCallback, useEffect } from 'react'
import { api } from '../../services/api'

import { Paginate } from '../../components/Paginate'

import { useMovies } from '../../hooks/Movies'
import { useFilters } from '../../hooks/Filters'

import { MovieContent } from '../../components/MovieContent'

import { ListingContainer } from './styles'
import { Form } from '../../components/Form'

export function Listing() {
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

  useEffect(() => {
    handleSubmit(filters.value, filters.page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ListingContainer>
      <Form onSubmit={() => handleSubmit(filters.value, 1)} />

      {movies && movies.length > 0 ? (
        movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <MovieContent movie={movie} />
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
    </ListingContainer>
  )
}
