import { Route, Routes } from 'react-router-dom'

import SignInForm from './_auth/forms/SignInForm'
import Home from './_root/pages/Home'
import './globals.css'

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* Public Route */}
                <Route path='/sign-in' element={<SignInForm />} />


                {/* Private Route */}
                <Route index element={<Home />} />
                {/* defining index: means it is a starting page */}
            </Routes>
        </main>
    )
}

export default App