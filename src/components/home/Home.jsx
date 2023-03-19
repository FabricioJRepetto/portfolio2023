import React from 'react'
import Projects from '../projects/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Main from './sections/Main'

const Home = ({ lang }) => {

    return (
        <div className='Home fade-in'>
            <Main lang={lang} />
            <About lang={lang} />
            <Projects lang={lang} />
            <Contact lang={lang} />
        </div>
    )
}

export default Home