import React, { useRef, useState } from 'react'
import { EMAIL, GITHUB, LINKEDIN, RESUME } from '../../../constants'
import Card from '../../projects/Card'
import ContactHolo from '../../utils/ContactHolo';
import ContactHand from '../../utils/ContactHand';
import useObserver from '../../hooks/useObserver';

const Contact = ({ lang }) => {
    const [selected, setSelected] = useState(null)
    const ref = useRef(null)
    const { isVisible } = useObserver(ref)

    const text = {
        git: GITHUB,
        link: LINKEDIN,
        mail: EMAIL,
        resume: RESUME
    }

    return (
        <section id='contact-section' className={`min-h-screen contact-section items-center pt-52 bg-gradient-to-br from-transparent via-transparent to-emerald-900/10 ${isVisible ? 'scroll-fade-in' : 'opacity-0'}`}>
            <article className='h-fit col-span-4 flex flex-col'>
                <h2 ref={ref} className="text-white font-bold tracking-tighter text-8xl mb-8">{lang === 'En' ? `Let's Connect!` : 'Conectemos!'}</h2>

                <div className='ml-40 w-fit'>
                    <a href='https://www.linkedin.com/in/fabricio-repetto/' target='_bank'
                        onMouseEnter={() => setSelected(() => 'link')}
                        onMouseLeave={() => setSelected(() => null)}>
                        <Card title='LinkedIn' description='linkedin.com/in/fabricio-repetto' />
                    </a>

                    <a href='https://github.com/FabricioJRepetto' target='_bank'
                        onMouseEnter={() => setSelected(() => 'git')}
                        onMouseLeave={() => setSelected(() => null)}>
                        <Card title='GitHub' description='github.com/FabricioJRepetto' />
                    </a>

                    <a href={`mailto:fabricio.j.repetto@gmail.com?subject=👋 ${lang === 'En' ? 'Hi' : 'Hola'} Fabricio!`}
                        onMouseEnter={() => setSelected(() => 'mail')}
                        onMouseLeave={() => setSelected(() => null)}>
                        <Card title='Email' description='fabricio.j.repetto@gmail.com' />
                    </a>

                    <a href='https://drive.google.com/file/d/1GMGpYKMRNpf4J3Rc9I2mwiH4ziS5V_6s/view' target='_bank'
                        onMouseEnter={() => setSelected(() => 'resume')}
                        onMouseLeave={() => setSelected(() => null)}>
                        <Card title={lang === 'En' ? 'Resume' : 'Curriculum'}
                            description={lang === 'En' ? 'english' : 'español'} />
                    </a>
                </div>
            </article>

            <article className='col-span-3 h-full relative'>
                {selected &&
                    <div className='contact-hologram fade-in'>
                        <ContactHolo text={text[selected]} />
                    </div>}

                <div className={`contact-hand ${selected ? 'fade-out' : 'x-fade-in'} `}>
                    {isVisible && <ContactHand />}
                </div>
            </article>

            <div className='footer'>
                <p>{lang === 'En' ? 'About this web' : 'Sobre esta página:'}</p>
                <a href='https://fabricio-repetto-v1.vercel.app'>
                    <b>V1</b>
                </a>

                <a href='https://github.com/FabricioJRepetto/portfolio2023' target='_blank' rel='noreferrer'>
                    <b>{lang === 'En' ? 'Repository' : 'Repositorio'}</b>
                </a>
            </div>
        </section>
    )
}

export default Contact