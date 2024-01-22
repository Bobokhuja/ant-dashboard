import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { MenuItem, navbarSelector, useAppSelector } from '@shared/model'

import { NavbarLogo } from './navbar-logo'

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
        items={items}
        selectedKeys={[active]}
        onSelect={(item) => {
          console.log(item)
          navigate(item.key)
        }}
      />
    </Layout.Sider>
  )
}
