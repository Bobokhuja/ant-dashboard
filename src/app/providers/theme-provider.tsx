import { PropsWithChildren } from 'react'
import { ConfigProvider } from 'antd'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <ConfigProvider>{children}</ConfigProvider>
}
