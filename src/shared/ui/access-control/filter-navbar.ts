import { MenuItem } from '@shared/model'

import { hasAccess } from './has-access'

export const filterNavbar = (navbar: MenuItem[]): MenuItem[] => {
  const filtered: MenuItem[] = []
  navbar.forEach((menuItem) => {
    const item = menuItem
    if (menuItem.children?.length) {
      item.children = filterNavbar(menuItem.children)
    } else {
      delete item.children
    }
    if (!menuItem.guarded) {
      filtered.push(menuItem)
    }
    if (menuItem.guarded && hasAccess()) {
      filtered.push(menuItem)
    }
  })
  return filtered
}
