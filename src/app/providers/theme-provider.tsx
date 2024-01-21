import { PropsWithChildren } from 'react'
import { App, ConfigProvider } from 'antd'

import 'antd/dist/reset.css'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ConfigProvider>
      <App>{children}</App>
    </ConfigProvider>
  )
}
