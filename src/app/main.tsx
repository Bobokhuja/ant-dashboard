import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Providers } from '@app/providers'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
)
