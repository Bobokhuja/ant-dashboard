import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

import { navbarSelector, useAppSelector } from '@shared/model'

const Logo: FC<
  HTMLAttributes<HTMLDivElement> & { $collapsed: boolean }
> = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 12px 14px;
  font-size: 15px;
  width: 100%;
  justify-content: ${(props) => (props.$collapsed ? 'center' : 'flex-start')};
  overflow: hidden;
`

const LogoText: FC<
  HTMLAttributes<HTMLDivElement> & { $collapsed: boolean }
> = styled.div`
  overflow: hidden;
  transition: all 250ms;
  width: ${(props) => (props.$collapsed ? '0px' : 'fit-content')};
  opacity: ${(props) => (props.$collapsed ? 0 : 1)};
  margin-left: ${(props) => (props.$collapsed ? 0 : 8)}px;
`

export const NavbarLogo = () => {
  const collapsed = useAppSelector(navbarSelector)
  return (
    <Logo $collapsed={collapsed}>
      <img
        src="/vite.svg"
        alt="Vite"
        width={32}
        height={32}
      />
      <LogoText $collapsed={collapsed}>Dashboard</LogoText>
    </Logo>
  )
}
