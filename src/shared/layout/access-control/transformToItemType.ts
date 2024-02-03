import { ItemType } from 'antd/es/menu/hooks/useItems'

import { MenuItem } from '../navbar/menu-item'

export const transformToItemType = (menuItems: MenuItem[]): ItemType[] => {
  return menuItems.map(({ guarded: _, ...item }) => item)
}
