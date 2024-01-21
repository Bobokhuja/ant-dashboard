import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { ItemType } from 'antd/es/menu/hooks/useItems'

export const navbar: ItemType[] = [
  {
    key: '/',
    icon: <UserOutlined />,
    label: 'Главная страница',
    children: [
      {
        key: '/home',
        label: 'Home',
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
