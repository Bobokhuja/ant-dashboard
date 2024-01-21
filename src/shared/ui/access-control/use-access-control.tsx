import { useEffect, useState } from 'react'

import { GuardItem, MenuItem } from '@shared/model'

import { filterNavbar } from './filter-navbar'

interface Props {
  navbar: MenuItem[]
  guards: GuardItem[]
}

export const useAccessControl = ({ navbar, guards }: Props) => {
  const [items, setItems] = useState<MenuItem[]>([])

  useEffect(() => {
    setItems(filterNavbar(navbar, guards))
  }, [navbar, guards])

  return items
}
