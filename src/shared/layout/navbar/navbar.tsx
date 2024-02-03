import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { useAppSelector } from '@shared/model'

import { transformToItemType } from '../access-control/transformToItemType'
import { MenuItem } from './menu-item'
import { NavbarLogo } from './navbar-logo'
import { navbarSelector } from './navbar-slice'

export const Navbar = ({ items }: { items: MenuItem[] }) => {
  const collapsed = useAppSelector(navbarSelector)
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
        onSelect={(item) => {
          navigate(item.key)
        }}
      />
    </Layout.Sider>
  )
}
