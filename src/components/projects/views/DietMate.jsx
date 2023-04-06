import React from 'react'
import { isMobile } from '../../utils/isMobile'
import Dash from '../extras/Dash'
import { DietMateAnim } from '../extras/DietMateAnim'

const DietMate = ({ lang }) => {
    const mobile = isMobile()

    return (
        <article className='project-page'>

            <header className='project-header-container'>
                <section className='project-header'>
                    <h1>Diet Mate</h1>

                    <div>
                        <h2>{`/// SPA + RESTful API + DATABASE`}</h2>

                        <div>
                            <p>React</p>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>PWA</p>
                            <p>Google login</p>
                        </div>

                        <p className='text-xl mb-8'>
                            <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                            {lang === 'En'
                                ? <>
                                    Personal project.<br />
                                    Meals organizer app, oriented to mobile use.<br />
                                    API design, database and UI/UX.
                                </>
                                : <>
                                    Proyecto personal.<br />
                                    Aplicación organizadora de comidas, orientada a mobile.<br />
                                    Diseño de API, base de datos y UI/UX.
                                </>}
                            <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                        </p>

                        <a href='https://weekly-diet.vercel.app' target='_blank' rel='noreferrer'>
                            <b>Web</b>
                        </a>
                        <a href='https://github.com/FabricioJRepetto/weekly-diet' target='_blank' rel='noreferrer'>
                            <b>Repo. [front]</b>
                        </a>
                        <a href='https://github.com/FabricioJRepetto/weekly-diet-backend' target='_blank' rel='noreferrer'>
                            <b>Repo. [back]</b>
                        </a>

                    </div>
                </section>

                <section className='project-logo'>
                    {!mobile && <DietMateAnim />}
                </section>
            </header>

            <section className='col-span-4 mb-32'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'What is Diet Mate?' : '¿Qué es Diet Mate?'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            This project comes up from a personal need: to organize my meals according to a specific diet. I developed this app, which generates recommendations to balance your daily meals based on the advice of a nutritionist.<br />
                            The overall design is intended for use on smart phones, so some touch gestures are used in the desktop version as well since they are intuitive and agile.
                        </>
                        : <>
                            Este proyecto surge de una necesidad personal: organizar mis comidas en base a una dieta especifica. Desarrollé esta app, que genera recomendaciones para balancear tus comidas diarias a partir de los consejos de una nutricionista.<br />
                            El diseño general está pensado para su uso en smart phones, por lo que se utilizan algunos gestos táctiles en la versión de escritorio también ya que resultan intuitivos y ágiles.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'User acounts' : 'Cuentas de usuario'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            Due to the nature of the application, a user system was necessary.<br />
                            I have implemented the login with Google's method because it has an easy implementation in the project, and it is quick to use for the users, with no need for passwords or confirmation emails.
                        </>
                        : <>
                            Debido a la naturaleza de la aplicación, era necesario un sistema de usuarios.<br />He implementado el inicio de sesión con el método de Google porque tiene una fácil implementación en el proyecto, y es de uso rápido para los usuarios, sin necesidad de contraseñas ni correos electrónicos de confirmación.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <div className='project-vertical-image'>
                <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1674140627/portfolio-preview/meal_creation_zfgzmv.gif" alt="users" />
            </div>

            <div className='project-vertical-image'>
                <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1674140627/portfolio-preview/workout_card_gmpwqy.gif" alt="users" />
            </div>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Recommendations' : 'Recomendaciones'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            When the user starts logging meals, the application will give daily recommendations to balance their diet.
                        </>
                        : <>
                            Cuando el usuario comienza a registrar comidas, la aplicación le dará recomendaciones diariamente, para balancear su dieta.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'History to PDF' : 'Historial a PDF'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            It is possible to select one or multiple weeks and generate a PDF file with the information for those dates.
                        </>
                        : <>
                            Es posible seleccionar una o multiples semanas y generar un archivo PDF con la información de esas fechas.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <div className='project-vertical-image'>
                <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1674140628/portfolio-preview/history_xn62cg.gif" alt="users" />
            </div>

            <div className='project-vertical-image'>
                <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1674140628/portfolio-preview/checkpoints_vneand.gif" alt="users" />
            </div>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Statistics' : 'Estadísticas'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            Another type of register is the "Checkpoint", where the user stores information about their weight, muscle mass, body fat and more.<br />
                            This data is based on the results of a bioimpedance study.<br /><br />
                            These registers are collected and displayed in charts so the user's progress can be easily viewed.
                        </>
                        : <>
                            Otro tipo de registro son los "Controles", donde el usuario guarda información sobre su peso, masa muscular, grasa corporal y más.<br />
                            Estos datos se basan en los resultados de un estudio de bioimpedancia.<br /><br />
                            Estos registros se recopilan y se muestran en gráficos para poder ver facilmente el progreso del usuario.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <div className='project-page-bg-top'></div>
            <div className='project-page-bg-bot'></div>

        </article>
    )
}

export default DietMate