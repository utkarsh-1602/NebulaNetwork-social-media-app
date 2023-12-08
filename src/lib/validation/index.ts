import * as z from "zod"

export const SignUpValidation_formSchema = z.object({
    username: z.string().min(2).max(50),
})
