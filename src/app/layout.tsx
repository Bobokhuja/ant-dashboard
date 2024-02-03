import { AppLayout, useAccessControl } from '@shared/layout'

import { navbar } from './config/navbar'

export const Layout = () => {
  const menuItems = useAccessControl(navbar)

  return <AppLayout navItems={menuItems} />
}
