import { MainPage } from '@pages/main-page'
import { NotFound } from '@pages/not-found'

import { RouteType } from './model/route-type'

export const routes: RouteType[] = [
  {
    key: 'main',
    path: '/',
    element: <MainPage />,
  },
  {
    key: 'not-found',
    path: '*',
    element: <NotFound />,
    withoutLayout: true,
  },
]
