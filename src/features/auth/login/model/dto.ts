import { z } from 'zod'

import { FormMessages } from './form-messages'

export const schema = z.object({
  email: z
    .string({ required_error: FormMessages.requiredEmail })
    .min(1, FormMessages.requiredEmail)
    .email({ message: FormMessages.invalidEmail }),
  password: z
    .string({ required_error: FormMessages.requiredPassword })
    .min(1, FormMessages.requiredPassword),
})

export type Dto = z.infer<typeof schema>
