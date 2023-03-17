import React, { useState } from 'react'
import { EMAIL, GITHUB, LINKEDIN, RESUME } from '../../../constants'
import Card from '../../projects/Card'
import Test from '../../utils/Test'
import GitHubChart from "../../common/GitHubChart";

const Contact = () => {
    const [selected, setSelected] = useState(null)

    const text = {
        git: GITHUB,
        link: LINKEDIN,
        mail: EMAIL,
        resume: RESUME
    }

    return (
        <>
            <article className='h-fit col-span-4 flex flex-col'>
                <h2 className="text-white font-bold tracking-tighter text-8xl mb-8">Conectemos</h2>

                <div className='pl-40'>
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

                    <a href='mailto:fabricio.j.repetto@gmail.com?subject=👋 Hola Fabricio!'
                        onMouseEnter={() => setSelected(() => 'mail')}
                        onMouseLeave={() => setSelected(() => null)}>
                        <Card title='Email' description='fabricio.j.repetto@gmail.com' />
                    </a>

                    <a href='https://drive.google.com/file/d/1GMGpYKMRNpf4J3Rc9I2mwiH4ziS5V_6s/view' target='_bank'
                        onMouseEnter={() => setSelected(() => 'resume')}
                        onMouseLeave={() => setSelected(() => null)}>
                        <Card title='Curriculum' description='español' />
                    </a>
                </div>
            </article>

            <article className='col-span-3 h-full relative'>
                {selected &&
                    <div className='contact-hologram fade-in'>
                        <Test text={text[selected]} />
                    </div>}

                <div className={`${selected ? 'fade-out angle' : 'fade-in'} relative top-1/2 `}>
                    <GitHubChart />
                    <p className="absolute inset-0 text-8xl font-thin mb-8">Saludame!</p>
                </div>
            </article>
        </>
    )
}

export default Contact