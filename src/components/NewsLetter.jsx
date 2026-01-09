import React from 'react'
function NewsLetter() {
    return (
        <>
            <section className='bg-[#005B9F] py-20 flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <div className='flex gap-4'>
                        <span className='bg-[#1F7AB2] h-16 w-16 flex justify-center items-center rounded-full'>

                            <i className='fa-solid fa-envelope text-2xl text-white text-3xl'></i>
                        </span>
                        <span className='bg-[#1F7AB2] h-16 w-16 flex justify-center items-center rounded-full'>

                            <i className='fa-solid fa-bell text-2xl text-white text-3xl'></i>
                        </span>
                        <span className='bg-[#1F7AB2] h-16 w-16 flex justify-center items-center rounded-full'>

                            <i className='fa-solid fa-book text-2xl text-white text-3xl'></i>
                        </span>
                    </div>

                    <h1 className='text-4xl font-bold text-white'>Stay Updated with New Arrivals</h1>
                    <p className='text-lg text-white'>Subscribe to our newsletter and be the first to know about new books, special events, and exclusive offers.</p>
                    <form className='space-x-4'>
                        <input type="email" placeholder='Enter your email' className='px-12 py-2 border border-gray-300 rounded-lg text-white' />
                        <button className='bg-white text-[#005B9F] px-12 py-2 rounded-lg'>Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default NewsLetter