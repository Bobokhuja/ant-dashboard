import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button as AntButton } from 'antd'
import styled from 'styled-components'

import {
  navbarSelector,
  toggleCollapseNavbar,
  useAppDispatch,
  useAppSelector,
} from '@shared/model'

const Button = styled(AntButton)`
  font-size: 16px;
  width: 64px !important;
  height: 64px !important;
`

export const CollapseNavbar = () => {
  const collapsed = useAppSelector(navbarSelector)
  const dispatch = useAppDispatch()
  const CollapseIcon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined

  const toggleCollapse = () => {
    dispatch(toggleCollapseNavbar())
  }

  return (
    <Button
      type="text"
      icon={<CollapseIcon />}
      onClick={toggleCollapse}
    />
  )
}
