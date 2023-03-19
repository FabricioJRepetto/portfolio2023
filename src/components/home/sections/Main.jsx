import React from 'react'
import Avatar from '../../common/Avatar'

const Main = () => {
    return (
        <section id='main-section' className='min-h-screen mb-2 items-center bg-gradient-to-tr from-transparent via-transparent to-emerald-900/10'>
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
    )
}

export default Main