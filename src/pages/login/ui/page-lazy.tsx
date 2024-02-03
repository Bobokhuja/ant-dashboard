import { lazy } from 'react'

export const Page = lazy(() =>
  import('./page').then(({ Page }) => ({ default: Page })),
)
