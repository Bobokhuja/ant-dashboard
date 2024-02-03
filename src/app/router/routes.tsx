import { MainPage } from '@pages/main-page'
import { NotFound } from '@pages/not-found'
import { RouteType } from '@shared/router'

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
