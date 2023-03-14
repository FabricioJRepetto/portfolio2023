import React from 'react'
import Avatar from '../common/Avatar'
import SideWriter from '../common/SideWriter'
import TextSlider from '../common/TextSlider'

const Home = () => {
    return (
        <div className='Home fade-in'>

            <section className='h-screen items-center'>
                <article className='h-fit col-span-4 flex flex-col'>
                    <h1 className="text-white font-bold tracking-tighter text-8xl">Fabricio Repetto</h1>
                    <p className="pl-40 w-3/4 text-4xl text-white font-bold mb-8">{`// web developer`}</p>

                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-6 mr-2'>{`<`}</b>
                        Desarrollador full stack viviendo en Argentina.<br />
                        Actualmente centrado en tecnologías JavaScript.
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                </article>

                <div className='m-auto col-span-3'>
                    <Avatar />
                </div>
            </section>

            <section className='h-screen items-center'>

                <article className='h-fit col-span-4 flex flex-col '>
                    <h2 className="text-white font-bold tracking-tighter text-8xl mb-8">Sobre Mí</h2>

                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        Tengo bases en diseño gráfico y fotografía, por lo que la creatividad es algo muy importante para mí.<br />
                        Siempre sentí curiosidad por la programación y en 2016 realicé un curso de fundamentos de Java, certificado por Oracle. Pero fue en 2021 que comencé a estudiar por mi cuenta desarrollo web con JavaScript y me dí cuenta de la libertad creativa que ofrece la programación. Es posible materializar literalmente cualquier cosa y eso es algo que me fascinó.<br />
                        Desde entonces estoy realizando proyectos para probar tecnologías nuevas, ponerme a prueba y perfeccionar mis habilidades.
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                </article>

                <div className='col-span-3 text-8xl tracking-tighter font-bold text-emerald-600'>
                    <TextSlider text={['Imaginar', 'Aprender', 'Crear', 'Repetir']} />
                </div>

            </section>

            <section className='h-screen items-center'>

                <article className='h-fit col-span-4 flex flex-col '>
                    <h2 className="text-white font-bold tracking-tighter text-8xl mb-8">Proyectos</h2>

                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        Cabañas Clarita
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        Diet Mate
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        TicTacToe
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        Provider Store
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        Dog House
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                </article>

            </section>

            <section className='h-screen items-center'>

                <article className='h-fit col-span-4 flex flex-col '>
                    <h2 className="text-white font-bold tracking-tighter text-8xl mb-8">Contacto</h2>

                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        GitHub
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        LinkedIn
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>
                    <p className='pl-40 w-3/4 text-2xl boder-slate-500'>
                        <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                        Email
                        <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                    </p>

                </article>

            </section>
        </div>
    )
}

export default Home