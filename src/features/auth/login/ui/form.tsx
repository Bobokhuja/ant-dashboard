import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'antd'

import { VerticalForm } from '@shared/ui'
import { FormInput } from '@shared/ui/form/form-input'

import { Dto, schema } from '../model/dto'

export const Form = () => {
  const { control } = useForm<Dto>({
    resolver: zodResolver(schema),
  })

  return (
    <VerticalForm>
      <FormInput
        control={control}
        label="Email"
        name="email"
        placeholder="admin@example.com"
        required
      />
      <FormInput
        control={control}
        label="Пароль"
        name="password"
        placeholder="123456"
        required
        password
      />
      <Button
        size="large"
        type="primary"
        block
      >
        Отправить
      </Button>
    </VerticalForm>
  )
}
