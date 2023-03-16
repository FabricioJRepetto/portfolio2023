import React from 'react'
import { PROYECTS_CODE } from '../../constants'
import CodeBg from '../background/CodeBg'
import Avatar from '../common/Avatar'
import GitHubChart from '../common/GitHubChart'
import TextSlider from '../common/TextSlider'
import Card from '../proyects/Card'

const Home = () => {
    return (
        <div className='Home fade-in'>

            <section className='h-screen items-center'>
                <article className='h-fit col-span-4 flex flex-col'>
                    <h1 className="text-white font-bold tracking-tighter text-8xl">Fabricio Repetto</h1>
                    <p className="pl-40 w-3/4 text-4xl text-white font-bold mb-8">{`/// web developer`}</p>

                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-6 mr-2'>{`<`}</b>
                        Desarrollador full stack viviendo en Argentina.<br />
                        Actualmente centrado en tecnologías JavaScript.
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                </article>

                <div className='relative m-auto col-span-3'>
                    <Avatar />
                </div>
            </section>

            <section className='h-screen items-center relative pb-16'>

                <article className='h-fit col-span-4 flex flex-col '>
                    <h2 className="text-white font-bold tracking-tighter text-8xl mb-8">Sobre Mí</h2>

                    <p className='pl-40 w-3/4 text-xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        Siempre sentí curiosidad por la programación y en 2016 realicé un curso de fundamentos de Java, certificado por Oracle. En 2021 comencé a estudiar desarrollo web con JavaScript de manera autodidacta junto a un grupo de amigos.
                        <br />
                        <br />
                        Mis bases en diseño gráfico y fotografía me llevó a apreciar la libertad creativa que ofrece la programación, algo que me pareció fascinante.
                        <br />
                        <br />
                        Desde entonces, he dedicado mi tiempo y esfuerzo a mejorar mis habilidades y conocimientos trabajando en proyectos que combinan soluciones creativas y efectivas con  diseño de experiencias de usuario atractivas e intuitivas.
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>

                </article>

                <div className='col-span-3 text-8xl tracking-tighter font-bold text-emerald-600'>
                    <TextSlider text={['Imaginar', 'Aprender', 'Crear', 'Repetir']} />
                </div>

                <div className='absolute bottom-32 w-screen col-span-7 flex gap-8 justify-center items-start text-emerald-600'>
                    <p>JavaScript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>React</p>
                    <p>Redux</p>
                    <p>Node</p>
                    <p>Express</p>
                    <p>SQL</p>
                    <p>MongoDB</p>
                    <p>Git</p>
                    <p>CRUD</p>
                    <p>SOLID</p>
                    <p>TailWind</p>
                    <p>Photoshop</p>
                    <p>Illustrator</p>
                </div>

            </section>


            <section className='h-screen items-center relative'>
                <article className='h-fit col-span-4 flex flex-col '>
                    <h2 className="text-white font-bold tracking-tighter text-8xl mb-16">Proyectos</h2>

                    <div className="pl-40 w-3/4">
                        <Card title='Cabañas Clarita' description='Sistema de gestión' />
                        <Card title='Diet Mate' description='Organizador de comidas' />
                        <Card title='TicTacToe' description='Juego online' space="pl-2" />
                        <Card title='Provider Store' description='Ecommerce' space="pl-6" />
                        <Card title='Dog House' description='Colección de perros' space="pl-16" />
                    </div>

                </article>

                <div className='absolute left-2/3 top-0 h-full'>
                    <CodeBg text={PROYECTS_CODE} id='proyects' />
                </div>
            </section>

            <section className='h-screen items-center'>

                <article className='h-fit col-span-4 flex flex-col '>
                    <h2 className="text-white font-bold tracking-tighter text-8xl mb-8">Contacto</h2>

                    <div className='pl-40'>
                        <a href='https://www.linkedin.com/in/fabricio-repetto/' target='_bank'>
                            <Card title='LinkedIn' description='linkedin.com/in/fabricio-repetto' space='pl-2' />
                        </a>

                        <a href='https://github.com/FabricioJRepetto' target='_bank'>
                            <Card title='GitHub' description='github.com/FabricioJRepetto' space='pl-4' />
                        </a>

                        <a href='mailto:fabricio.j.repetto@gmail.com'>
                            <Card title='Email' description='fabricio.j.repetto@gmail.com' space='pl-12' />
                        </a>

                    </div>
                </article>

                <article className='col-span-3'>
                    <p className="pl-40 w-3/4 text-4xl text-white font-bold mb-8">Saludame!</p>
                    <GitHubChart />
                </article>
            </section>
        </div>
    )
}

export default Home