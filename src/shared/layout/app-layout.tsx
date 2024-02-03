import { Layout as AntLayout } from 'antd'
import styled from 'styled-components'

import { Content } from './content'
import { Header } from './header'
import { MenuItem } from './navbar/menu-item'
import { Navbar } from './navbar/navbar'

const Layout = styled(AntLayout)`
  height: 100vh;
`

interface Props {
  navItems: MenuItem[]
}

export const AppLayout = ({ navItems }: Props) => {
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
