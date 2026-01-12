import React, { useState } from 'react'
import { Link } from 'react-router'
import { useContext } from 'react'
import AuthContext from '../context/AuthContect'
import { useNavigate } from 'react-router'
function Login() {

    const [rememberMe, setRememberMe] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { loginUser, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        // Handle login logic here
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUserProfile({
                    displayName: email
                })
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                e.target.reset()
            })

    }

    const handleGoogleSignIn = () => {
        // Handle Google sign-in logic
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {

            })
    }

    return (
        <section className='min-h-screen flex items-center justify-center bg-gray-50'>
            <div className='bg-white rounded-2xl shadow-xl w-full max-w-lg p-8'>
                {/* Logo */}
                <div className='flex justify-center mb-6'>
                    <div className='bg-[#005B9F] text-white p-4 rounded-2xl'>
                        <i className='fa-solid fa-book text-3xl'></i>
                    </div>
                </div>

                {/* Welcome Text */}
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Welcome back</h1>
                    <p className='text-gray-600'>Sign in to your BookNest account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className='space-y-5'>
                    {/* Email Field */}
                    <div>
                        <label htmlFor='email' className='block text-sm font-semibold text-gray-900 mb-2'>
                            Email
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                <i className='fa-solid fa-envelope text-gray-400'></i>
                            </div>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='Enter your email'
                                className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005B9F] focus:border-transparent transition duration-200'
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor='password' className='block text-sm font-semibold text-gray-900 mb-2'>
                            Password
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                <i className='fa-solid fa-lock text-gray-400'></i>
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                name='password'
                                placeholder='Enter your password'
                                className='w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005B9F] focus:border-transparent transition duration-200'
                                required
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600'
                            >
                                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                id='remember'
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className='h-4 w-4 text-[#005B9F] focus:ring-[#005B9F] border-gray-300 rounded cursor-pointer'
                            />
                            <label htmlFor='remember' className='ml-2 text-sm text-gray-700 cursor-pointer'>
                                Remember me
                            </label>
                        </div>
                        <Link to='/forgot-password' className='text-sm text-[#005B9F] hover:text-[#004080] font-medium'>
                            Forgot password?
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type='submit'
                        className='w-full bg-[#005B9F] text-white py-3 rounded-lg font-semibold hover:bg-[#004080] transition duration-300 shadow-md hover:shadow-lg'
                    >
                        Sign in
                    </button>
                </form>

                {/* Divider */}
                <div className='relative my-6'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300'></div>
                    </div>
                    <div className='relative flex justify-center text-sm'>
                        <span className='px-4 bg-white text-gray-500'>or continue with</span>
                    </div>
                </div>

                {/* Google Sign In */}
                <button
                    type='button'
                    onClick={handleGoogleSignIn}
                    className='w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300 shadow-sm hover:shadow-md'
                >
                    <svg className='w-5 h-5' viewBox='0 0 24 24'>
                        <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' />
                        <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' />
                        <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' />
                        <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' />
                    </svg>
                    Continue with Google
                </button>

                {/* Register Link */}
                <p className='text-center text-sm text-gray-600 mt-6'>
                    Don't have an account?{' '}
                    <Link to='/register' className='text-[#005B9F] hover:text-[#004080] font-semibold'>
                        Register
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default Login