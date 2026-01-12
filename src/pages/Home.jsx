import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Category from '../components/Category'
import Featured from '../components/Featured'
import WhyChooseUs from '../components/WhyChooseUs'
import NewsLetter from '../components/NewsLetter'

function Home() {
    return (
        <>
            {/* container */}
            <section >
                <Hero />
                <Stats />
                <Category />
                <Featured />
                <WhyChooseUs />
                <NewsLetter />
            </section >

        </>
    )
}

export default Home