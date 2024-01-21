import { Route, Routes } from 'react-router-dom'

import { routes } from '@app/router/routes'
import { AppLayout, useAccessControl } from '@shared/ui'

import { guards } from '../../config/guards'
import { navbar } from '../../config/navbar'
import { groupingRoutes } from '../lib/grouping-routes'
import { renderRoutes } from './render-routes'

const { withLayout, withoutLayout } = groupingRoutes(routes)

export const AppRouter = () => {
  const menuItems = useAccessControl({ navbar, guards })
  return (
    <Routes>
      {/** layout route */}
      <Route
        path="/"
        element={<AppLayout navItems={menuItems} />}
      >
        {renderRoutes(withLayout)}
      </Route>
      {renderRoutes(withoutLayout)}
    </Routes>
  )
}
