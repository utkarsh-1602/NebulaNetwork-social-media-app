import { Route, Routes } from 'react-router-dom'

import './globals.css'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'
import { Home } from './_root/pages'

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* Public Route */}
                <Route path='/sign-in' element={<SignInForm />} />
                <Route path='/sign-up' element={<SignUpForm />} />


                {/* Private Route */}
                <Route index element={<Home />} />
                {/* defining index: means it is a starting page */}
            </Routes>
        </main>
    )
}

export default App