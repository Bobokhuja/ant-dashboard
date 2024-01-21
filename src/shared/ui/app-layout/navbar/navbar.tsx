import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { MenuItem, navbarSelector, useAppSelector } from '@shared/model'

import { NavbarLogo } from './navbar-logo'

export const Navbar = ({ items }: { items: MenuItem[] }) => {
  const collapsed = useAppSelector(navbarSelector)
  const navigate = useNavigate()

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
        onSelect={(item) => {
          navigate(item.key)
        }}
      />
    </Layout.Sider>
  )
}
