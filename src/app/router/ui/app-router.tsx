import { Outlet, Route, Routes } from 'react-router-dom'

import { routes } from '@app/router/routes'

import { groupingRoutes } from '../lib/grouping-routes'
import { renderRoutes } from './render-routes'

const { withLayout, withoutLayout } = groupingRoutes(routes)

export const AppRouter = () => {
  return (
    <Routes>
      {/** layout route */}
      <Route
        path="/"
        element={<Outlet />}
      >
        {renderRoutes(withLayout)}
      </Route>
      {renderRoutes(withoutLayout)}
    </Routes>
  )
}
