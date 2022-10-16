import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="OMDb">
        OMDb
      </NavLink>
    </HeaderContainer>
  )
}
