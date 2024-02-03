import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { transformToItemType } from '../access-control/transformToItemType'
import { MenuItem } from './menu-item'
import { NavbarLogo } from './navbar-logo'
import { useMenu } from './store'

export const Navbar = ({ items }: { items: MenuItem[] }) => {
  const collapsed = useMenu((state) => state.collapsed)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const active = items.find((item) => item.key === pathname)?.key as string

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
    >
      <NavbarLogo />
      <Menu
        theme="dark"
        mode="inline"
        items={transformToItemType(items)}
        selectedKeys={[active]}
        onSelect={({ key }) => {
          navigate(key)
        }}
      />
    </Layout.Sider>
  )
}
