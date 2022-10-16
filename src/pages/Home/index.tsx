import { useNavigate } from 'react-router-dom'
import { useFilters } from '../../hooks/Filters'

import { HomeContainer } from './styles'

export function Home() {
  const navigate = useNavigate()

  const { filters, updateFilters } = useFilters()

  return (
    <HomeContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/listing')
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
    </HomeContainer>
  )
}
