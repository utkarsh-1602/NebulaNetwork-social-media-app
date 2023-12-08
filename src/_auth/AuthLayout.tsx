import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {

    const isAuthenticated = false;

    return (
        // This is a react Fragment
        <>
            {
                isAuthenticated ? (
                    <Navigate to="/" />
                ) : (
                    <>
                        <section>
                            <Outlet />
                        </section>
                    </>
                )
            }
        </>
    )
}

export default AuthLayout

// This AuthLayout is going to wrap signin and signup forms