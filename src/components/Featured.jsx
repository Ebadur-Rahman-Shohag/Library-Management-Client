import React from 'react'
import image1 from '../assets/book1.jpg'
function Featured() {
    return (
        <>
            <section className='bg-[#F1F6F8] '>
                <div className='container mx-auto py-20'>
                    <h1 className='text-4xl font-bold text-left mb-4'>Explore Categories</h1>
                    <p className='text-lg text-left'>Discover new books and authors, and find the perfect read for every mood and occasion.</p>
                    <div className='grid grid-cols-4 gap-6 mt-12'>
                        {/* card - 1 */}
                        <div className='flex flex-col gap-4 items-center border-3 border-gray-300 shadow-lg bg-white px-4 py-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
                            <div className='w-full h-auto object-cover object-[80%_20%] rounded-lg shadow-lg'>
                                <img className='w-full h-[300px] object-cover object-[80%_20%] rounded-lg shadow-lg' src={image1} alt="" />
                            </div>
                            <div className='flex flex-col gap-4 items-center mt-4'>
                                <h1 className='text-2xl font-bold'>The Great Gatsby</h1>
                                <p className='text-lg'>Author: F. Scott Fitzgerald</p>
                                <div className='flex gap-4 items-center'>
                                    <p className='text-lg'> <i className="fa-solid fa-star"></i> Rating: 4.5</p>
                                    <p className='text-lg'>5 available</p>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <button className='bg-[#F5F9FB] text-black font-semibold px-8 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>Read Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 items-center border-3 border-gray-300 shadow-lg bg-white px-4 py-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
                            <div className='w-full h-auto object-cover object-[80%_20%] rounded-lg shadow-lg'>
                                <img className=' w-full h-[300px] object-cover object-[80%_20%] rounded-lg shadow-lg' src={image1} alt="" />
                            </div>
                            <div className='flex flex-col gap-4 items-center mt-4'>
                                <h1 className='text-2xl font-bold'>The Great Gatsby</h1>
                                <p className='text-lg'>Author: F. Scott Fitzgerald</p>
                                <div className='flex gap-4 items-center'>
                                    <p className='text-lg'> <i className="fa-solid fa-star"></i> Rating: 4.5</p>
                                    <p className='text-lg'>5 available</p>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <button className='bg-[#F5F9FB] text-black font-semibold px-8 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>Read Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 items-center border-3 border-gray-300 shadow-lg bg-white px-4 py-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
                            <div className='w-full h-auto object-cover object-[80%_20%] rounded-lg shadow-lg'>
                                <img className='w-full h-[300px] object-cover object-[80%_20%] rounded-lg shadow-lg' src={image1} alt="" />
                            </div>
                            <div className='flex flex-col gap-4 items-center mt-4'>
                                <h1 className='text-2xl font-bold'>The Great Gatsby</h1>
                                <p className='text-lg'>Author: F. Scott Fitzgerald</p>
                                <div className='flex gap-4 items-center'>
                                    <p className='text-lg'> <i className="fa-solid fa-star"></i> Rating: 4.5</p>
                                    <p className='text-lg'>5 available</p>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <button className='bg-[#F5F9FB] text-black font-semibold px-8 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>Read Now</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 items-center border-3 border-gray-300 shadow-lg bg-white px-4 py-6 rounded-lg hover:shadow-xl transition duration-300 ease-in-out'>
                            <div className='w-full h-auto object-cover object-[80%_20%] rounded-lg shadow-lg'>
                                <img className='w-full h-[300px] object-cover object-[80%_20%] rounded-lg shadow-lg' src={image1} alt="" />
                            </div>
                            <div className='flex flex-col gap-4 items-center mt-4'>
                                <h1 className='text-2xl font-bold'>The Great Gatsby</h1>
                                <p className='text-lg'>Author: F. Scott Fitzgerald</p>
                                <div className='flex gap-4 items-center'>
                                    <p className='text-lg'> <i className="fa-solid fa-star"></i> Rating: 4.5</p>
                                    <p className='text-lg'>5 available</p>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <button className='bg-[#F5F9FB] text-black font-semibold px-8 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>Read Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Featured