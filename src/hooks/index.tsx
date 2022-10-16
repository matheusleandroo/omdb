import React, { PropsWithChildren } from 'react'

import { MoviesProvider } from './Movies'
import { MovieProvider } from './Movie'
import { FiltersProvider } from './Filters'

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <FiltersProvider>
    <MoviesProvider>
      <MovieProvider>{children}</MovieProvider>
    </MoviesProvider>
  </FiltersProvider>
)

export default AppProvider
