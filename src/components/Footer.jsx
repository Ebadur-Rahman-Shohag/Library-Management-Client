import React, { useState } from 'react'
import { Link } from 'react-router'

function Footer() {
    const [email, setEmail] = useState('')

    const handleSubscribe = (e) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log('Subscribing email:', email)
        setEmail('')
    }

    return (
        <footer className='bg-white border-t border-gray-200'>
            <div className='container mx-auto px-4 py-12'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
                    {/* Brand Section */}
                    <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-[#005B9F] text-white p-2 rounded font-bold text-sm'>
                                <i className='fa-solid fa-book text-lg'></i>
                            </div>
                            <h2 className='text-xl font-bold text-gray-900'>BookNest</h2>
                        </div>
                        <p className='text-gray-600 text-base leading-relaxed'>
                            Your gateway to knowledge. Discover, borrow and explore our vast collection of books across all genres.
                        </p>
                        {/* Social Media Icons */}
                        <div className='flex gap-3 pt-2'>
                            <a href='#' className='w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-[#005B9F] hover:text-white hover:border-[#005B9F] transition duration-300'>
                                <i className='fa-brands fa-facebook-f text-sm'></i>
                            </a>
                            <a href='#' className='w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-[#005B9F] hover:text-white hover:border-[#005B9F] transition duration-300'>
                                <i className='fa-brands fa-twitter text-sm'></i>
                            </a>
                            <a href='#' className='w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-[#005B9F] hover:text-white hover:border-[#005B9F] transition duration-300'>
                                <i className='fa-brands fa-instagram text-sm'></i>
                            </a>
                            <a href='#' className='w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-[#005B9F] hover:text-white hover:border-[#005B9F] transition duration-300'>
                                <i className='fa-brands fa-github text-sm'></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-lg font-bold text-gray-900 mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li>
                                <Link to='/' className='text-gray-600 hover:text-[#005B9F] transition duration-300 text-base'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/all-books' className='text-gray-600 hover:text-[#005B9F] transition duration-300 text-base'>
                                    All Books
                                </Link>
                            </li>
                            <li>
                                <Link to='/add-book' className='text-gray-600 hover:text-[#005B9F] transition duration-300 text-base'>
                                    Add Book
                                </Link>
                            </li>
                            <li>
                                <Link to='/borrowed-books' className='text-gray-600 hover:text-[#005B9F] transition duration-300 text-base'>
                                    Borrowed Books
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className='text-lg font-bold text-gray-900 mb-4'>Contact Us</h3>
                        <ul className='space-y-3'>
                            <li className='flex items-start gap-2 text-gray-600 text-base'>
                                <i className='fa-solid fa-location-dot mt-1 text-[#005B9F]'></i>
                                <span>123 Library Street, Education City</span>
                            </li>
                            <li className='flex items-center gap-2 text-gray-600 text-base'>
                                <i className='fa-solid fa-phone text-[#005B9F]'></i>
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className='flex items-center gap-2 text-gray-600 text-base'>
                                <i className='fa-solid fa-envelope text-[#005B9F]'></i>
                                <span>contact@booknest.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className='text-lg font-bold text-gray-900 mb-4'>Newsletter</h3>
                        <p className='text-gray-600 text-base mb-4'>
                            Subscribe to get updates on new arrivals and special offers.
                        </p>
                        <form onSubmit={handleSubscribe} className='space-y-2'>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005B9F] focus:border-transparent text-sm'
                                required
                            />
                            <button
                                type='submit'
                                className='w-full bg-[#005B9F] text-white px-4 py-2 rounded-lg hover:bg-[#004080] transition duration-300 font-semibold text-sm'
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className='border-t border-gray-200 pt-6 mt-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-gray-600 text-sm'>
                            © 2026 BookNest Library. All rights reserved.
                        </p>
                        <div className='flex gap-6'>
                            <Link to='/privacy-policy' className='text-gray-600 hover:text-[#005B9F] transition duration-300 text-sm'>
                                Privacy Policy
                            </Link>
                            <Link to='/terms-of-service' className='text-gray-600 hover:text-[#005B9F] transition duration-300 text-sm'>
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
