import React, { useState } from 'react'
import { Link } from 'react-router'
import { useContext } from 'react'
import AuthContext from '../context/AuthContect'
import { useNavigate } from 'react-router'
function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const { registerUser, setLoading, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        // Handle registration logic here
        const fullName = e.target.fullName.value
        const email = e.target.email.value
        const photoURL = e.target.photoURL.value
        const password = e.target.password.value

        const profile = {
            displayName: fullName,
            photoURL: photoURL
        }
        registerUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                updateUserProfile(profile)
                navigate('/login')
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
            })
            .finally(() => {
                e.target.reset()
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

                {/* Heading */}
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Create an account</h1>
                    <p className='text-gray-600'>Join BookNest Library today</p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleRegister} className='space-y-5'>
                    {/* Full Name Field */}
                    <div>
                        <label htmlFor='fullName' className='block text-sm font-semibold text-gray-900 mb-2'>
                            Full Name
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                <i className='fa-solid fa-user text-gray-400'></i>
                            </div>
                            <input
                                type='text'
                                id='fullName'
                                name='fullName'
                                placeholder='Enter your full name'
                                className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005B9F] focus:border-transparent transition duration-200'
                                required
                            />
                        </div>
                    </div>

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

                    {/* Photo URL Field */}
                    <div>
                        <label htmlFor='photoURL' className='block text-sm font-semibold text-gray-900 mb-2'>
                            Photo URL
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                <i className='fa-solid fa-image text-gray-400'></i>
                            </div>
                            <input
                                type='url'
                                id='photoURL'
                                name='photoURL'
                                placeholder='Enter your photo URL'
                                className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005B9F] focus:border-transparent transition duration-200'
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
                                placeholder='Create a password'
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

                    {/* Create Account Button */}
                    <button
                        type='submit'
                        className='w-full bg-[#025B9F] text-white py-3 rounded-lg font-semibold hover:bg-[#6A8AA3] transition duration-300 shadow-md hover:shadow-lg mt-6'
                    >
                        Create account
                    </button>
                </form>

                {/* Sign In Link */}
                <p className='text-center text-sm text-gray-600 mt-6'>
                    Already have an account?{' '}
                    <Link to='/login' className='text-[#005B9F] hover:text-[#004080] font-semibold'>
                        Sign in
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default Register