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
                        <section className="flex flex-1 justify-center items-center flex-col py-10">
                            <Outlet />
                        </section>

                        <img src="assets/images/side-img6.jpg" alt="logo" className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat" />
                    </>
                )
            }
        </>
    )
}

export default AuthLayout

// This AuthLayout is going to wrap signin and signup forms