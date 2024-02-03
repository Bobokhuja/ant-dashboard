import { useId } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { Form, Input, InputProps, Typography } from 'antd'

interface Props<Dto extends FieldValues> extends InputProps {
  name: Path<Dto>
  control: Control<Dto>
  label: string
  password?: boolean
  required?: boolean
}

export const FormInput = <Dto extends FieldValues>({
  name,
  control,
  label,
  password,
  required,
  ...props
}: Props<Dto>) => {
  const id = useId()
  const inputId = `form-input-${id}`
  const Component = password ? Input.Password : Input

  return (
    <Controller<Dto>
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          name={field.name as string}
          htmlFor={inputId}
          label={label}
          required={required}
          extra={
            error?.message && (
              <Typography.Text type="danger">{error.message}</Typography.Text>
            )
          }
        >
          <Component
            id={inputId}
            size="large"
            {...field}
            {...props}
          />
        </Form.Item>
      )}
    />
  )
}
