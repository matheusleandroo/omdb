import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  PropsWithChildren,
} from 'react'

import { IMovie } from '../../interfaces/IMovie'

interface MovieContextData {
  movie: IMovie | null
  updateMovie(values: IMovie | null): void
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData)

const MovieProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [movie, setMovie] = useState<IMovie | null>(null)

  const updateMovie = useCallback((values: IMovie) => {
    setMovie(values)
  }, [])

  return (
    <MovieContext.Provider value={{ movie, updateMovie }}>
      {children}
    </MovieContext.Provider>
  )
}

function useMovie(): MovieContextData {
  const context = useContext(MovieContext)

  if (!context) {
    throw new Error('useMovie must be used within a MovieProvider')
  }

  return context
}

export { MovieProvider, useMovie }
