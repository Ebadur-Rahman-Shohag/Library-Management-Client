import React from 'react'
function WhyChooseUs() {
    return (
        <>
            <section className='bg-[#F6F9FB] '>
                <div className='container mx-auto py-20'>
                    <h1 className='text-4xl font-bold text-center mb-4'>Why Choose Us</h1>
                    <p className='text-lg text-center'>Discover new books and authors, and find the perfect read for every mood and occasion.</p>
                    {/* cards container */}
                    <div className='grid grid-cols-3 grid-rows-2 gap-12 mt-12'>
                        <div className='flex gap-4'>
                            <div className='p-4 h-12 w-12 bg-[#DFE9F1] rounded-lg flex justify-center items-center'>
                                <i className="fa-solid fa-layer-group text-2xl text-blue-400"></i>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold'>Vast Collection</h1>
                                <p className='text-lg text-gray-500'>Access over 10,000 books across 50+ categories, from classics to modern bestsellers.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='p-4 h-12 w-12 bg-[#DFE9F1] rounded-lg flex justify-center items-center'>

                                <i className="fa-solid fa-infinity text-2xl text-blue-400"></i>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold'>Unlimited Access</h1>
                                <p className='text-lg text-gray-500'>Read books on the go, anytime, anywhere.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='p-4 h-12 w-12 bg-[#DFE9F1] rounded-lg flex justify-center items-center'>

                                <i className="fa-solid fa-shield-halved text-2xl text-blue-400"></i>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold'>Secure System</h1>
                                <p className='text-lg text-gray-500'>Your data is protected with industry-standard security measures.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='p-4 h-12 w-12 bg-[#DFE9F1] rounded-lg flex justify-center items-center'>

                                <i className="fa-solid fa-rotate-left text-2xl text-blue-400"></i>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-bold'>Easy Returns</h1>
                                <p className='text-lg text-gray-500'>Hassle-free borrowing and returning process with automated reminders.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='p-4 h-12 w-12 bg-[#DFE9F1] rounded-lg flex justify-center items-center'>

                                <i className="fa-solid fa-lightbulb text-2xl text-blue-400"></i>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold'>Recommendations</h1>
                                <p className='text-lg text-gray-500'>Get personalized book suggestions based on your reading history.</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='p-4 h-12 w-12 bg-[#DFE9F1] rounded-lg flex justify-center items-center'>

                                <i className="fa-solid fa-users text-2xl text-blue-400"></i>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold'>Community</h1>
                                <p className='text-lg text-gray-500'>Join a thriving community of readers and participate in book discussions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs