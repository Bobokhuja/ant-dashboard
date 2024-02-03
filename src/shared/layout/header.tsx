import { theme } from 'antd'

import { AppHeader } from './app-header'
import { CollapseNavbar } from './collapse-navbar'

export const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <AppHeader $background={colorBgContainer}>
      <CollapseNavbar />
    </AppHeader>
  )
}
