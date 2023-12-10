import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"


import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignInValidation } from "@/lib/validation"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"
import { useSignInAccountMutation } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"
import Loader from "@/components/shared/Loader"


const SignInForm = () => {

    const { toast } = useToast()

    const navigate = useNavigate()

    const { mutateAsync: signInAccount } = useSignInAccountMutation();

    const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

    // 1. Define your form.
    const form = useForm<z.infer<typeof SignInValidation>>({
        resolver: zodResolver(SignInValidation),
        defaultValues: {
            email: '',
            password: ''
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof SignInValidation>) {
        console.log(values)

        const session = await signInAccount({
            email: values.email,
            password: values.password
        })

        console.log({ session })
        console.log(session)


        if (!session) {
            return toast({
                title: "Signin Failed. Please try again!",
            })
        }

        // Now that, after we have a session, we need to store that session in react context. 
        // at all times, we need to know that the user is signed in or not
        const isLoggedIn = await checkAuthUser();

        console.log({ isLoggedIn })

        if (isLoggedIn) {
            form.reset();

            console.log("NAVIGATING")

            // we are successfully signed in
            navigate('/')
        } else {
            return toast({
                title: "Signup Failed. Please try again!",
            })
        }

    }


    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <img src="/assets/images/logo4.png" alt="logo" />

                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
                    Login to your Account
                </h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                    Welcome back! Please Enter your Details..
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="shad-button_primary">
                        {isUserLoading ? (
                            <div className="flex-center gap-2">
                                <Loader /> Loading...
                            </div>

                        ) : (
                            "Sign In"
                        )}
                    </Button>
                    <p className="text-small-regular text-light-2 text-center mt-2">
                        Don't have an account?
                        <Link
                            to="/sign-up"
                            className="text-primary-500 text-small-semibold ml-1">
                            SignUp
                        </Link>
                    </p>
                </form>
            </div>

        </Form >
    )
}

export default SignInForm