import { Layout as AntLayout } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import styled from 'styled-components'

import { Content } from './content'
import { Header } from './header'
import { Navbar } from './navbar/navbar'

const Layout = styled(AntLayout)`
  height: 100vh;
`

export const AppLayout = ({ navItems }: { navItems: ItemType[] }) => {
  return (
    <Layout>
      <Navbar items={navItems} />
      <Layout>
        <Header />
        <Content />
      </Layout>
    </Layout>
  )
}
