import React from 'react'
function Category() {
    return (
        <>
            <section className='bg-[#F6F9FB] '>
                <div className='container mx-auto py-20'>
                    <h1 className='text-4xl font-bold text-center mb-4'>Explore Categories</h1>
                    <p className='text-lg text-center'>Discover new books and authors, and find the perfect read for every mood and occasion.</p>
                    <div className='grid grid-cols-4 gap-4 mt-12'>
                        {/* card - 1 */}
                        <div className='flex items-center justify-center border-3 border-gray-300 shadow-lg bg-white px-16 py-12 rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
                            <div className='flex flex-col gap-3 items-center justify-center'>
                                <i className="fa-solid fa-book text-2xl"></i>
                                <h1 className='text-2xl font-bold'>Novel</h1>
                                <p className='text-lg text-center'>Novel books for adults and children</p>
                                <button className='bg-[#F5F9FB] text-black font-semibold px-8 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>View All</button>
                            </div>
                        </div>
                        {/* card - 2 */}
                        <div className='flex items-center justify-center border-3 border-gray-300 shadow-lg bg-white px-16 py-12 rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
                            <div className='flex flex-col gap-3 items-center justify-center'>
                                <i className="fa-solid fa-user-pen text-2xl"></i>
                                <h1 className='text-2xl font-bold'>Biography</h1>
                                <p className='text-lg text-center'>True stories of real people</p>
                                <button className='bg-[#F5F9FB] text-black font-semibold px-8 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>View All</button>
                            </div>
                        </div>
                        {/* card - 3 */}
                        <div className='flex items-center justify-center border-3 border-gray-300 shadow-lg bg-white px-16 py-12 rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
                            <div className='flex flex-col gap-3 items-center justify-center'>
                                <i className="fa-solid fa-graduation-cap text-2xl"></i>
                                <h1 className='text-2xl font-bold'>Non-Fiction</h1>
                                <p className='text-lg text-center'>Non-fiction books</p>
                                <button className='bg-[#F5F9FB] text-black font-semibold px-8 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'  >View All</button>
                            </div>
                        </div>
                        {/* card - 4 */}
                        <div className='flex items-center justify-center border-3 border-gray-300 shadow-lg bg-white px-16 py-12 rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
                            <div className='flex flex-col gap-3 items-center justify-center'>
                                <i className="fa-solid fa-child text-2xl"></i>
                                <h1 className='text-2xl font-bold'>Children's</h1>
                                <p className='text-lg text-center'>Books for children</p>
                                <button className='bg-[#F5F9FB] text-black font-semibold px-8 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'  >View All</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-12'>
                        <button className='bg-[#F5F9FB] text-black font-semibold px-8 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>View All Categories</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Category