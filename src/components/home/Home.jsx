import React from 'react'
import Projects from '../projects/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Main from './sections/Main'

const Home = () => {

    return (
        <div className='Home fade-in'>
            <Main />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home