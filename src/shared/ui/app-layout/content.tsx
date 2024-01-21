import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
import { BasicProps } from 'antd/es/layout/layout'
import styled from 'styled-components'

interface AppContentProps extends BasicProps {
  $background: string
  $radius: number
}

const AppContent: FC<AppContentProps> = styled(Layout.Content)`
  margin: 24px 16px;
  padding: 24px;
  background: ${(props) => props.$background};
  border-radius: ${(props) => props.$radius}px;
`

export const Content = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <AppContent
      $radius={borderRadiusLG}
      $background={colorBgContainer}
    >
      <Outlet />
    </AppContent>
  )
}
