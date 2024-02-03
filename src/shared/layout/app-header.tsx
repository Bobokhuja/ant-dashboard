import { FC, PropsWithChildren } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

interface AppHeaderProps extends PropsWithChildren {
  $background: string
}

export const AppHeader: FC<AppHeaderProps> = styled(Layout.Header)`
  padding: 0;
  background: ${(props) => props.$background};
`
