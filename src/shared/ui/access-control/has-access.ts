import { ItemType } from 'antd/es/menu/hooks/useItems'

import { GuardItem } from '@shared/model'

export const hasAccess = (guards: GuardItem[]) => {
  const isAdmin = true
  return (item: ItemType) => {
    const guard = guards.find(({ key }) => key === item?.key)
    return !guard || guard.guarded === isAdmin
  }
}
