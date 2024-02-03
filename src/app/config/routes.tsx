import { MainPage } from '@pages/main-page'
import { NotFoundPage } from '@pages/not-found'
import { RouterPaths, RouteType } from '@shared/router'

export const routes: RouteType[] = [
  {
    key: 'main',
    path: RouterPaths.main,
    element: <MainPage />,
  },
  {
    key: 'not-found',
    path: '*',
    element: <NotFoundPage />,
    withoutLayout: true,
  },
]
