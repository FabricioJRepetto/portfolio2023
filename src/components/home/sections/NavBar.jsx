import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useScroll from '../../hooks/useScroll'
import Dash from '../../projects/extras/Dash'
import { toSection } from '../../utils/scrollTo'

const NavBar = ({ lang, switchLang }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { blur } = useScroll()

    const home = () => {
        if (pathname === '/home') {
            toSection('main-section')
        } else {
            navigate('/home')
        }
    }

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 ${pathname !== '/' ? '' : 'hidden'}`}>
            <nav className='nav-bar'>
                <div onClick={home}><b>FR</b> <Dash />{` web developer`}</div>

                <div className='flex gap-6 fade-in'>
                    {pathname === '/home' &&
                        <>
                            <span onClick={() => toSection('about-section')}>
                                <p className='text-sky-500 text-xl'>{`///`}</p> {lang === 'En' ? 'me' : 'yo'}
                            </span>
                            <span onClick={() => toSection('projects-section')}>
                                <p className='text-rose-500 text-xl'>{`///`}</p> {lang === 'En' ? 'projects' : 'proyectos'}
                            </span>
                            <span onClick={() => toSection('contact-section')}>
                                <p className='text-orange-500 text-xl'>{`///`}</p> {lang === 'En' ? 'contact' : 'contacto'}
                            </span>
                        </>}
                    <span onClick={switchLang}>
                        <p className='text-emerald-500 text-xl'>{`///`}</p> {lang === 'En' ? 'eng' : 'esp'}
                    </span>
                </div>
            </nav>

            <div className={blur ? 'nav-back fade-in' : 'fade-out'}></div>
        </div>
    )
}

export default NavBar