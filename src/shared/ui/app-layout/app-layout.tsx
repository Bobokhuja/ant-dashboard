import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'

import { MenuItem } from '@shared/model'

import { Content } from './content'
import { Header } from './header'
import { Navbar } from './navbar/navbar'

const Layout = styled(AntLayout)`
  height: 100vh;
`

export const AppLayout = ({ navItems }: { navItems: MenuItem[] }) => {
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
