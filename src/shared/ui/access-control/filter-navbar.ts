import { GuardItem, MenuItem } from '@shared/model'

const isAdmin = false
export const filterNavbar = (navbar: MenuItem[], guards: GuardItem[]) => {
  const items: MenuItem[] = []
  for (const menuItem of navbar) {
    const item = menuItem
    const guarded = guards.find(({ key }) => key === menuItem.key)
    if (!guarded?.guarded) {
      if (menuItem.children?.length) {
        item.children = filterNavbar(menuItem.children, guards)
        items.push(item)
        continue
      }
      item.children = undefined
      items.push(item)
      continue
    }
    if (isAdmin) {
      if (menuItem.children?.length) {
        item.children = filterNavbar(menuItem.children, guards)
        items.push(item)
        continue
      }
      items.push(item)
    }
  }
  return items
}
