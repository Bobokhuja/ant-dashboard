import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button as AntButton } from 'antd'
import styled from 'styled-components'

import { useMenu } from './navbar/store'

const Button = styled(AntButton)`
  font-size: 16px;
  width: 64px !important;
  height: 64px !important;
`

export const CollapseNavbar = () => {
  const [collapsed, toggle] = useMenu(({ collapsed, toggle }) => [
    collapsed,
    toggle,
  ])
  const CollapseIcon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined

  return (
    <Button
      type="text"
      icon={<CollapseIcon />}
      onClick={toggle}
    />
  )
}
