import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { PROYECTS_CODE } from '../../constants'
import CodeBg from '../background/CodeBg'
import GitHubChart from '../common/GitHubChart'
import useObserver from '../hooks/useObserver'
import Card from './Card'

const Projects = ({ lang }) => {
    const ref = useRef(null)
    const navigate = useNavigate()
    const { isVisible } = useObserver(ref)

    return (
        <section ref={ref} id='projects-section' className={`min-h-screen pt-40 mb-2 items-center relative ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
            <article className='h-fit col-span-7 flex flex-col z-10'>
                <h2 className={`text-white font-bold tracking-tighter text-8xl mb-8`}>{lang === 'En' ? 'Projects' : 'Proyectos'}</h2>

                <div className="w-10/12 self-center flex flex-col items-center">
                    <label onClick={() => navigate('/projects/claritaadmin')}>
                        <Card title={lang === 'En' ? 'Clarita Cabins' : 'Cabañas Clarita'}
                            description={lang === 'En' ? 'Management system' : 'Sistema de gestión'}
                            image='claritaadmin' tags={['React', 'Express', 'MongoDB']} />
                    </label>

                    <label onClick={() => navigate('/projects/dietmate')}>
                        <Card title='Diet Mate'
                            description={lang === 'En' ? 'Meals organizer' : 'Organizador de comidas'}
                            image='dietmate' tags={['React', 'Express', 'MongoDB']} place='10' />
                    </label>

                    <label onClick={() => navigate('/projects/tictactoe')}>
                        <Card title='TicTacToe Io'
                            description={lang === 'En' ? 'Online game' : 'Juego online'}
                            image='tictactoe' tags={['React', 'Express', 'WebSocket']} place='-10' />
                    </label>

                    <label onClick={() => navigate('/projects/providerstore')}>
                        <Card title='Provider Store' description='Ecommerce' image='provider' tags={['React', 'Redux', 'Express', 'MongoDB']} />
                    </label>

                    <label onClick={() => navigate('/projects/doghouse')}>
                        <Card title='Dog House'
                            description={lang === 'En' ? 'Dogs collection' : 'Colección de perros'}
                            image='dog' tags={['React', 'Redux', 'Express', 'PostgreSQL']} place='-10' />
                    </label>
                </div>

                <h2 className="font-bold tracking-tighter text-4xl mt-32 mb-8">{lang === 'En' ? 'Coming soon...' : 'Próximamente...'}</h2>

                <div className="pl-40 w-3/4">
                    <label onClick={() => null}>
                        <Card title='Image Mutator' description={lang === 'En' ? 'Image manipulation' : 'Manipulación de imágenes'} />
                    </label>
                </div>

            </article>

            <div className='absolute left-0 top-0 h-full opacity-30'>
                {isVisible && <CodeBg text={PROYECTS_CODE} id='proyects' loadingAnim />}
            </div>

            <div className={`absolute bottom-32 right-8`}>
                <GitHubChart />
            </div>
        </section>
    )
}

export default Projects