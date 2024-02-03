import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

import { MenuItem } from '@shared/layout'

export const navbar: MenuItem[] = [
  {
    key: '/',
    icon: <UserOutlined />,
    label: 'Главная страница',
    guarded: true,
  },
  {
    key: '/second',
    icon: <VideoCameraOutlined />,
    label: 'Вторая страница',
  },
  {
    key: '/third',
    icon: <UploadOutlined />,
    label: 'Третья страница',
  },
]
