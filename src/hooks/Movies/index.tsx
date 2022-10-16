import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  PropsWithChildren,
} from 'react'

import { IMovies } from '../../interfaces/IMovies'

interface MoviesContextData {
  movies: IMovies | null
  updateMovies(values: IMovies | null): void
}

const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData)

const MoviesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [movies, setMovies] = useState<IMovies | null>(null)

  const updateMovies = useCallback((values: IMovies) => {
    setMovies(values)
  }, [])

  return (
    <MoviesContext.Provider value={{ movies, updateMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}

function useMovies(): MoviesContextData {
  const context = useContext(MoviesContext)

  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider')
  }

  return context
}

export { MoviesProvider, useMovies }
