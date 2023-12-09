import * as z from "zod"

// here we are defining validation for different components which will be reusable
export const SignUpValidation = z.object({
    name: z.string().min(2, { message: "Too short" }),
    username: z.string().min(2, { message: "username must be atleast 5 characters" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be atleast 8 characters" })
})

export const SignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export const PostValidation = z.object({
    caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
    file: z.custom<File[]>(),
    location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
    tags: z.string(),
});