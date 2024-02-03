import { MenuItemType } from 'antd/es/menu/hooks/useItems'

export interface MenuItem extends MenuItemType {
  children?: MenuItem[]
  guarded?: boolean
}
