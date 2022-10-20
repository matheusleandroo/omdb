import { NavLink } from 'react-router-dom'

import { useFilters } from '../../hooks/Filters'

import { HeaderContainer } from './styles'

export function Header() {
  const { filters, updateFilters } = useFilters()
  return (
    <HeaderContainer>
      <NavLink
        to="/"
        title="OMDb"
        onClick={() =>
          updateFilters({
            ...filters,
            value: '',
            page: 1,
          })
        }
      >
        OMDb
      </NavLink>
    </HeaderContainer>
  )
}
