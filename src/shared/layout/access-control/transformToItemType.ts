import { ItemType } from 'antd/es/menu/hooks/useItems'

import { MenuItem } from '../../model'

export const transformToItemType = (menuItems: MenuItem[]): ItemType[] => {
  return menuItems.map(({ guarded: _, ...item }) => item)
}
