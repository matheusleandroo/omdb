import { Routes, Route } from 'react-router-dom'

import { Details } from './pages/Details'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  )
}
