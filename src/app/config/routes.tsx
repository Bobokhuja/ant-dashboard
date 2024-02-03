import { LoginPage } from '@pages/login'
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
    key: 'login',
    path: RouterPaths.login,
    element: <LoginPage />,
    withoutLayout: true,
  },
  {
    key: 'not-found',
    path: '*',
    element: <NotFoundPage />,
    withoutLayout: true,
  },
]
