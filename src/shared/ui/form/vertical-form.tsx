import { ReactNode } from 'react'
import { Form, FormProps } from 'antd'

interface Props extends Omit<FormProps, 'onFinish'> {
  onSubmit?: FormProps['onFinish']
}

export const VerticalForm = ({ onSubmit, children, ...props }: Props) => {
  return (
    <Form
      layout="vertical"
      variant="outlined"
      onFinish={onSubmit}
      {...props}
    >
      {children as ReactNode}
    </Form>
  )
}
