import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  PropsWithChildren,
} from 'react'

import { IFilters } from '../../interfaces/IFilters'

interface FiltersContextData {
  filters: IFilters
  updateFilters(values: IFilters): void
}

const FiltersContext = createContext<FiltersContextData>(
  {} as FiltersContextData,
)

const FiltersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [filters, setFilters] = useState<IFilters>({
    value: '',
    page: 1,
    totalPage: 0,
  })

  const updateFilters = useCallback((values: IFilters) => {
    setFilters(values)
  }, [])

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}

function useFilters(): FiltersContextData {
  const context = useContext(FiltersContext)

  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider')
  }

  return context
}

export { FiltersProvider, useFilters }
