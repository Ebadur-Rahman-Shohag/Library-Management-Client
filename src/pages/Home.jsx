import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Category from '../components/Category'
import Featured from '../components/Featured'
function Home() {
    return (
        <>
            {/* container */}
            <section className='bg-[#E9F1F6] mb-12'>
                <Hero />
                <Stats />
                <Category />
                <Featured />

            </section>

        </>
    )
}

export default Home