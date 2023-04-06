import React from 'react'
import Avatar from '../../common/Avatar'

const Main = ({ lang }) => {

    return (
        <section id='main-section' className='home-main-section'>
            <article className='h-fit col-span-7 md:col-span-4 flex flex-col'>
                <h1 className="text-white font-bold tracking-tighter text-8xl">Fabricio Repetto</h1>
                <p className="pl-10 md:pl-40 md:w-3/4 text-2xl md:text-4xl text-white font-bold mb-8">{`/// fullstack developer`}</p>

                <p className='px-10 md:pl-40 md:w-3/4 text-2xl boder-slate-500'>
                    <b className=' text-emerald-600 font-normal -ml-6 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            Hi! I'm a full stack developer based in Argentina. <br />I love cool designs and ingenious solutions.
                        </>
                        : <>
                            Hola! Soy un desarrollador full stack en Argentina. <br />Me gustan los diseños atractivos y<br /> las soluciones ingeniosas.
                        </>
                    }
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </article>

            <div className='relative col-span-3 hidden md:flex'>
                <Avatar />
            </div>
        </section>
    )
}

export default Main