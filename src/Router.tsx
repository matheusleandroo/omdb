import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { Listing } from './pages/Listing'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}
