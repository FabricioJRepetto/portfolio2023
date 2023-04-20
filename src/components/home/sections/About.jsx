import React, { useRef } from 'react'
import TextSlider from '../../common/TextSlider'
import useObserver from '../../hooks/useObserver'

const About = ({ lang }) => {
    const ref = useRef(null)
    const { isVisible } = useObserver(ref)

    return (
        <section id='about-section' className={`min-h-screen items-center relative mb-40 md:mb-0 md:pb-16 transition-opacity duration-1000 ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>

            <article ref={ref} className='h-fit col-span-7 md:col-span-4 flex flex-col '>
                <h2 className="text-white font-bold tracking-tighter text-8xl mb-8">{lang === 'En' ? 'About Me' : 'Sobre Mí'}</h2>

                <p className='px-10 md:pl-40 md:w-3/4 text-base md:text-xl boder-slate-500'>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            I always felt curious about programming, and in 2016, I took a Java fundamentals course certified by Oracle. In 2021, I started studying web development with JavaScript on my own, along with a group of friends.
                            <br />
                            <br />
                            My background in graphic design and photography led me to appreciate the creative freedom that programming offers, which I found fascinating.
                            <br />
                            <br />
                            Since then, I have dedicated my time and effort to improving my skills and knowledge by working on projects that combine creative and effective solutions with attractive and intuitive user experience design.
                        </>
                        : <>
                            Siempre sentí curiosidad por la programación y, en 2016, realicé un curso de fundamentos de Java, certificado por Oracle. En 2021, comencé a estudiar desarrollo web con JavaScript de manera autodidacta junto a un grupo de amigos.
                            <br />
                            <br />
                            Mis bases en diseño gráfico y fotografía me llevó a apreciar la libertad creativa que ofrece la programación, algo que me pareció fascinante.
                            <br />
                            <br />
                            Desde entonces, he dedicado mi tiempo y esfuerzo a mejorar mis habilidades y conocimientos trabajando en proyectos que combinan soluciones creativas y efectivas con  diseño de experiencias de usuario atractivas e intuitivas.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>

            </article>

            <div className='col-span-7 md:col-span-3 text-6xl md:text-8xl tracking-tighter font-bold text-emerald-600 -z-10'>
                {isVisible && <TextSlider text={lang === 'En' ? ['Imagine', 'Learn', 'Create', 'Repeat'] : ['Imaginar', 'Aprender', 'Crear', 'Repetir']} />}
            </div>

            <div className='absolute -bottom-40 md:bottom-32 md:w-screen col-span-7 flex flex-wrap gap-3 md:gap-8 justify-center items-start text-emerald-600'>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>React</p>
                <p>Redux</p>
                <p>Node</p>
                <p>Express</p>
                <p>SQL</p>
                <p>MongoDB</p>
                <p>Git</p>
                <p>SCRUM</p>
                <p>SOLID</p>
                <p>Tailwind</p>
                <p>Photoshop</p>
                <p>Illustrator</p>
            </div>
        </section>
    )
}

export default About