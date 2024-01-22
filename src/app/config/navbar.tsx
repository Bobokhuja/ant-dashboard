import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

import { MenuItem } from '@shared/model'

export const navbar: MenuItem[] = [
  {
    key: '/',
    icon: <UserOutlined />,
    label: 'Главная страница',
    children: [
      {
        key: '/home',
        label: 'Home',
        guarded: true,
      },
    ],
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
