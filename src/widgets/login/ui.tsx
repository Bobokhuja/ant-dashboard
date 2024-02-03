import { Flex, Layout, Typography } from 'antd'
import styled from 'styled-components'

import { LoginForm } from '@features/auth'

const FormLayout = styled(Layout)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormWidget = styled(Flex)`
  max-width: 400px;
  width: 100%;
`

export const Ui = () => {
  return (
    <FormLayout>
      <FormWidget vertical>
        <Typography.Title level={2}>Вход</Typography.Title>
        <LoginForm />
      </FormWidget>
    </FormLayout>
  )
}
