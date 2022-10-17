import { useCallback, useEffect } from 'react'
import { api } from '../../services/api'

import { Paginate } from '../../components/Paginate'

import { useMovies } from '../../hooks/Movies'
import { useFilters } from '../../hooks/Filters'

import { MovieContent } from '../../components/MovieContent'

import { Form } from '../../components/Form'
import { ListingContent } from './styles'

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
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    [filters, updateFilters, updateMovies],
  )

  useEffect(() => {
    handleSubmit(filters.value, 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Form
        largeTitle={false}
        onSubmit={() => handleSubmit(filters.value, 1)}
      />

      <ListingContent>
        {movies && movies.length > 0 ? (
          movies.map((movie) => {
            return (
              <div key={movie.imdbID}>
                <MovieContent movie={movie} />
              </div>
            )
          })
        ) : (
          <h3>Nenhum resultado</h3>
        )}

        {movies && movies.length > 0 && (
          <Paginate
            page={filters.page}
            pageCount={filters.totalPage}
            onPageChange={(selected) => handleSubmit(filters.value, selected)}
          />
        )}
      </ListingContent>
    </>
  )
}
