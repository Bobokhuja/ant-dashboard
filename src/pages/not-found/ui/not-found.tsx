import { Result } from 'antd'

import { ToHomeLink } from '@features/to-home'

export const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Страница не найдена"
      extra={<ToHomeLink />}
    />
  )
}
