import React from 'react'
import Dash from '../extras/Dash'
import DogHouseAnim from '../extras/DogHouseAnim'

const DogHouse = ({ lang }) => {

    return (
        <article className='project-page'>

            <header className='project-header-container'>
                <section className='project-header'>
                    <h1>Dog House</h1>

                    <div>
                        <h2>{`/// SPA + RESTful API + DATABASE`}</h2>

                        <div>
                            <p>React</p>
                            <p>Express</p>
                            <p>PostgreSQL</p>
                            <p>APIs</p>
                        </div>

                        <p className='text-xl  mb-8'>
                            <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                            {lang === 'En'
                                ? <>
                                    Personal project.<br />
                                    API consumption, SQL database and localStorage usage.<br />
                                    API design, data base and UI/UX.
                                </>
                                : <>
                                    Proyecto personal.<br />
                                    Consumo de APIs, uso de localStorage y base de datos SQL.<br />
                                    Diseño de API, base de datos y UI/UX.
                                </>}
                            <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                        </p>

                        <a className='pr-8' href='https://the-dog-house.vercel.app' target='_blank' rel='noreferrer'>
                            <b>Web</b>
                        </a>
                        <a className='pr-8' href='https://github.com/FabricioJRepetto/ProyectoDogs' target='_blank' rel='noreferrer'>
                            <b>Repo. [front+back]</b>
                        </a>

                    </div>
                </section>

                <section className='project-logo'>
                    <DogHouseAnim />
                </section>
            </header>

            <section className='col-span-4 mb-32'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'What is Dog House?' : '¿Qué es Dog House?'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            This is a single page application that makes use of APIs (the dog API and Wikimedia API) to show information about different dog breeds, it can be filtered by multiple options simultaneously.<br /> Users can create their own dogs in the platform (it's stored on a Postgres database) and also see other users dogs too.
                        </>
                        : <>
                            Esta es una aplicación de una sola página (SPA) que utiliza APIs (the Dog API y Wikimedia API) para mostrar información sobre distintas razas de perros, esta se puede filtrar mediante varias opciones simultaneamente.<br /> Los usuarios pueden crear sus propios perros en la plataforma (estos se almacenan en una base de datos de Postgres) y también ver los de otros usuarios.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'No user accounts' : 'Sin cuentas de usuario'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            The app makes use of localStorage to save the dogs created by the user and the ones saved as "favorites" without the need of account creation.
                        </>
                        : <>
                            La aplicación utiliza el localStorage para guardar los perros creados por el usuario y los que haya agregado a favoritos sin la necesidad de crear una cuenta.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665013245/portfolio-preview/dog_house_favapn.gif" alt="users" />

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171192/portfolio-preview/Screenshot_2022-10-07_163145_td4hyu.png" alt="users" />

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Wikipedia information' : 'Información de Wikipedia'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            The Dog API have some missing information about some dogs. To solve this issue, the backend search a description about the selected breed on the Wikimedia API and adds it to the response.
                        </>
                        : <>
                            La API the Dogs tiene información faltante sobre algunos perros. Para solucionar este problema, el backend busca descripciones sobre el perro indicado con la API de Wikimedia y la agrega a la respuesta.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <div className='project-page-bg-top'></div>
            <div className='project-page-bg-bot'></div>

        </article>
    )
}

export default DogHouse