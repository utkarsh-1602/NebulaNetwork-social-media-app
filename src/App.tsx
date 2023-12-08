import { Route, Routes } from 'react-router-dom'

import './globals.css'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Toaster } from "@/components/ui/toaster"


const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* Public Route */}
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SignInForm />} />
                    <Route path='/sign-up' element={<SignUpForm />} />
                </Route>

                {/* Private Route */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    {/* defining index: means it is a starting page */}
                </Route>

            </Routes>
            <Toaster />

        </main>
    )
}

export default App