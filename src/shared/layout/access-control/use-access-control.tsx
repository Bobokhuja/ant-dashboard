import { useEffect, useState } from 'react'

import { MenuItem } from '../../model'
import { filterNavbar } from './filter-navbar'

export const useAccessControl = (navbar: MenuItem[]) => {
  const [items, setItems] = useState<MenuItem[]>([])

  useEffect(() => {
    setItems(filterNavbar(navbar))
  }, [navbar])

  return items
}
