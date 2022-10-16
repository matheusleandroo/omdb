import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { DefaultLayoutContainer, OutletContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </DefaultLayoutContainer>
  )
}
