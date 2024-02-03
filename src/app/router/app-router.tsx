import { Route, Routes } from 'react-router-dom'

import { groupingRoutes, renderRoutes } from '@shared/router'
import { AppLayout, useAccessControl } from '@shared/ui'

import { navbar } from '../config/navbar'
import { routes } from './routes'

const { withLayout, withoutLayout } = groupingRoutes(routes)

export const AppRouter = () => {
  const menuItems = useAccessControl(navbar)

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
