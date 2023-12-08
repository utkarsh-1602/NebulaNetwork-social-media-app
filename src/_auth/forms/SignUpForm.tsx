import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignUpValidation_formSchema } from "@/lib/validation"
import { z } from "zod"

const SignUpForm = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof SignUpValidation_formSchema>>({
        resolver: zodResolver(SignUpValidation_formSchema),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: ''
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof SignUpValidation_formSchema>) {
        console.log(values)
    }


    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">

            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form >
    )
}

export default SignUpForm