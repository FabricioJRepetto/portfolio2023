import React, { useRef } from 'react'
import TextSlider from '../../common/TextSlider'
import useObserver from '../../hooks/useObserver'

const About = () => {
    const ref = useRef(null)
    const { isVisible } = useObserver(ref)

    return (
        <section id='about-section' className={`min-h-screen items-center relative pb-16 transition-opacity duration-1000 ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
            <article ref={ref} className='h-fit col-span-4 flex flex-col '>
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
                {isVisible && <TextSlider text={['Imaginar', 'Aprender', 'Crear', 'Repetir']} />}
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
    )
}

export default About