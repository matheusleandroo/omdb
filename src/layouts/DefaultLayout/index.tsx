import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

import {
  DefaultLayoutContainer,
  OutletContainer,
  OutletContent,
} from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <OutletContainer>
        <OutletContent>
          <Outlet />
        </OutletContent>
      </OutletContainer>
    </DefaultLayoutContainer>
  )
}
