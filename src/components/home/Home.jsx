import React from 'react'
import Avatar from '../common/Avatar'
import TextSlider from '../common/TextSlider'
import Projects from '../projects/Projects'
import Contact from './sections/Contact'

const Home = () => {
    return (
        <div className='Home fade-in'>

            <section className='h-screen items-center'>
                <article className='h-fit col-span-4 flex flex-col'>
                    <h1 className="text-white font-bold tracking-tighter text-8xl">Fabricio Repetto</h1>
                    <p className="pl-40 w-3/4 text-4xl text-white font-bold mb-8">{`/// web developer`}</p>

                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-6 mr-2'>{`<`}</b>
                        Hola! Soy un desarrollador full stack en Argentina. Me gustan los diseños atractivos y las soluciones ingeniosas.
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                </article>

                <div className='relative col-span-3'>
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
                <Projects />
            </section>

            <section className='contact-section items-center mt-40'>
                <Contact />
            </section>

            <div className='footer pb-4 border flex items-center'>
                <div className='border h-8 w-screen col-span-7 flex gap-8 justify-center text-emerald-600'>
                    <p>Sobre esta página:</p>
                    <p>V1</p>
                    <p>Repositorio</p>
                </div>
            </div>
        </div>
    )
}

export default Home