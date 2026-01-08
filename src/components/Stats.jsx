import React from 'react'

function Stats() {
    return (
        <>
            <section className='bg-white border border-gray-300 rounded-xl shadow-lg flex justify-between items-center container mx-auto px-12 py-8 mt-12 mb-20'>
                <div className='flex flex-col gap-2 items-center'>
                    <i class="fa-solid fa-book-open-reader text-2xl text-blue-400"></i>
                    <h1 className='text-2xl font-bold'>1000+</h1>
                    <p className='text-lg'>Books</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <i class="fa-solid fa-user text-2xl text-blue-400"></i>
                    <h1 className='text-2xl font-bold'>1000+</h1>
                    <p className='text-lg'>Users</p>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <i class="fa-solid fa-hand-holding-hand text-2xl text-blue-400"></i>
                    <h1 className='text-2xl font-bold'>1000+</h1>
                    <p className='text-lg'>Borrowed Books</p>
                </div>
            </section>
        </>
    )
}

export default Stats