import * as z from "zod"

// here we are defining validation for different components which will be reusable
export const SignUpValidation_formSchema = z.object({
    name: z.string().min(2, { message: "Too short" }),
    username: z.string().min(2, { message: "username must be atleast 5 characters" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be atleast 8 characters" })
})
