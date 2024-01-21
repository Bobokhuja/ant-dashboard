import { Route, Routes } from 'react-router-dom'

import { routes } from '@app/router/routes'
import { AppLayout } from '@shared/ui/app-layout/app-layout'

import { navbar } from '../../config/navbar'
import { groupingRoutes } from '../lib/grouping-routes'
import { renderRoutes } from './render-routes'

const { withLayout, withoutLayout } = groupingRoutes(routes)

export const AppRouter = () => {
  return (
    <Routes>
      {/** layout route */}
      <Route
        path="/"
        element={<AppLayout navItems={navbar} />}
      >
        {renderRoutes(withLayout)}
      </Route>
      {renderRoutes(withoutLayout)}
    </Routes>
  )
}
