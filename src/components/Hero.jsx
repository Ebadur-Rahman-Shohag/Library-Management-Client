import React from 'react'
import image1 from '../assets/library-image.jpg'

function Hero() {
    return (
        <>
            <section className='bg-[#E9F1F6]'>
                <div className=' flex justify-between items-center container mx-auto py-20'>
                    {/* left side */}
                    <div className='w-1/2 space-y-4'>
                        <h3 className='flex gap-2 items-center font-semibold text-lg'><span><i class="fa-solid fa-book-open-reader text-2xl"></i></span> <span>Explore thousands of books across every genre</span></h3>
                        <h1 className='text-4xl font-bold'>Find your next favorite book</h1>
                        <p className='text-lg'>Discover new books and authors, and find the perfect read for every mood and occasion.</p>
                        <div className='flex gap-4 items-center'>
                            <button className='bg-[#F5F9FB] text-black font-semibold px-12 py-4 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>Start Reading</button>
                            <button className='bg-[#F5F9FB] text-black font-semibold px-12 py-4 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'>View All Books</button>
                        </div>
                    </div>
                    {/*right side */}
                    <div className='w-1/2'>
                        <img className='w-full max-h-[600px] object-cover object-[80%_20%] rounded-lg shadow-lg' src={image1} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero