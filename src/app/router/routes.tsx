import { NotFound } from '@pages/not-found'

import { RouteType } from './model/route-type'

export const routes: RouteType[] = [
  {
    key: 'not-found',
    path: '*',
    element: <NotFound />,
    withoutLayout: true,
  },
]
