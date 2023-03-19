import React from 'react'
import ClaritaLogo from '../extras/ClaritaLogo'
import Dash from '../extras/Dash'

const ClaritaAdmin = ({ lang }) => {
    return (
        <article className='project-page'>

            <header className='project-header-container'>
                <section className='project-header'>
                    <h1>{lang === 'En' ? 'Clarita Cabins' : 'Cabañas Clarita'}</h1>

                    <div>
                        <h2>{`/// SPA + RESTful API + DATABASE`}</h2>

                        <div>
                            <p>React</p>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>SOLID</p>
                            <p>PWA</p>
                        </div>

                        <p className='text-xl  mb-8'>
                            <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                            {lang === 'En'
                                ? <>
                                    Client project.<br />
                                    Hotel management system.<br />
                                    API design, database and UI/UX.
                                </>
                                : <>
                                    Proyecto para cliente.<br />
                                    Sistema de gestión de un hotel.<br />
                                    Diseño de API, base de datos y UI/UX.
                                </>}
                            <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                        </p>

                        <a className='pr-8' href='https://clarita-admin.vercel.app/login' target='_blank' rel='noreferrer'>
                            <b>Web</b>
                        </a>
                        <a className='pr-8' href='https://github.com/FabricioJRepetto/clarita-frontend' target='_blank' rel='noreferrer'>
                            <b>Repo. [front]</b>
                        </a>
                        <a href='https://github.com/FabricioJRepetto/clarita-backend' target='_blank' rel='noreferrer'>
                            <b>Repo. [back]</b>
                        </a>

                    </div>
                </section>

                <section className='project-logo'>
                    <ClaritaLogo />
                </section>
            </header>

            <section className='col-span-4 mb-32'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'What is this project?' : '¿Qué es este proyecto?'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            This is a project for a client, <a className='link-button' href='https://www.instagram.com/cabaniasclarita/' target='_blank' rel='noreferrer'>"Cabañas Clarita"</a>, who needed a system that helps him manage his hotel facilities.<br />
                            The project was designed applying SOLID principles, both in the backend and in the frontend, and allows to organize and keep record of clients, booking and finance.
                        </>
                        : <>
                            Este pryectos es para un cliente, <a className='link-button' href='https://www.instagram.com/cabaniasclarita/' target='_blank' rel='noreferrer'>"Cabañas Clarita"</a>, que necesitaba un sistema que lo ayude a administrar las instalaciones de su hotel.<br />
                            El proyecto está diseñado aplicando los principios SOLID, tanto en el backend como en el frontend, y permite organizar y llevar registro de clientes, reservas y finanzas.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Users acounts' : 'Cuentas de usuario'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            The system counts with a user system with multiple roles for the staff.<br />
                            When a user register a new account, it is not alowed to enter the system. An admin must approve it in order to login and be able to see, create and edit information. <br />
                            Certain actions are limited to specific roles, like deleting a client/reservation or approving new accounts.
                        </>
                        : <>
                            El sistema cuenta con un sistema de usuarios con multiples roles para el staff.<br />
                            Cuando un usuario registra una nueva cuenta, esta no tiene permitido ingresar al sistema. Un administrador debe autorizarla para que le sea posible iniciar sesión y poder crear y editar información.<br />
                            Ciertas acciones están limitadas a roles especificos, como eliminar un cliente/reserva o aprobar nuevas cuentas.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1678578880/portfolio-preview/clarita_admin_dashboard_csvqxv.png" alt="users" />

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1678576341/portfolio-preview/ezgif-1-cfc7995002_lficv6.gif" alt="booking" />

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Booking Panel' : 'Panel de reservas'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            The booking panel was designed from scratch to show fast and crearly the reservations and availability of each room.<br />
                            It also allows the user to quickly register new bookings by simply selecting empty date tiles.
                        </>
                        : <>
                            El panel de reservas está diseñado desde cero para mostrar de forma rapida y sencilla las reservas y disponibilidades de cada alojamiento.<br />
                            También permite crear rapidamente una nueva reserva seleccionando las casillas vacias en las fechas deseadas.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Finance' : 'Finanzas'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            All booking payments logs automatically in the ledger.<br />
                            It also allows the user to create expense or revenue entries manually.<br />
                            These records are used to generate monthly statistics and averages.
                        </>
                        : <>
                            Todas los pagos de las reservas se registran automáticamente en el libro contable.<br /> También permite al usuario crear entradas de gastos o ingresos manualmente.<br />
                            Todos estos registros se utilizan para generar estadisticas y promedios mensuales.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1678580216/portfolio-preview/ezgif-1-b7aed2d600_tkww10.gif" alt="booking" />

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1678581568/portfolio-preview/ezgif-1-17e8e8957b_lb2m9z.gif" alt="booking" />

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Main page utilities' : 'Utilidades en la página principal'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            Multiple utilities can be found on the main page, such as:<br /><br />
                            <b>Availability Check:</b> search all available rooms for a number of persons in specifics dates.<br /><br />
                            <b>Room calendar:</b> shows the state of each room on a given date.<br /><br />
                            <b>Unpaid reservations:</b> this section will show all reservations wich payment is not "complete". It also gives the posibility to add a "quick payment" to complete the reservation.<br /><br />
                            <b>Announcements:</b> featured messages (created by authorized staff members).<br /><br />
                        </>
                        : <>
                            Varias utilidades se pueden encontrar rapidamente en la página principal, tales como:<br /><br />
                            <b>Busqueda de disponibilidad:</b> podremos ver las habitaciones disponebles introduciendo fechas y cantidad de personas a alojar.<br /><br />
                            <b>Calendario de habitaiones:</b> muestra el estado de cada habitación en determinada fecha.<br /><br />
                            <b>Reservas impagas:</b> esta sección mostrará las reservas cuyo pago aún no está completo. Tabien ofrece una forma de agregar un "pago rapido" para completar la reserva.<br /><br />
                            <b>Anuncios:</b> mensajes destacados (creados por miembros del staff autorizados).
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {`Extras`}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            Other remarkable utilities on the project:<br /><br />
                            <b>Responsive design</b><br /><br />
                            <b>Dark/light themes:</b> the app detects automaticaly the system configuration, adapting its color scheme to fit the user's preference.<br /><br />
                            <b>Progresive Web Aapplication:</b> PWA allows to download and install an app version on the device (computer or mobile)<br /><br />
                            <b>Account recovery via email:</b> email or password changes are made by a code that is sent by email automatically.
                        </>
                        : <>
                            Otras utilidades destacables del proyecto:<br /><br />
                            <b>Diseño responsive</b><br /><br />
                            <b>Tema claro/oscuro:</b> la aplicación detecta automaticamente la configuración del sistema para ajustar el esquema de colores a los preferidos por el usuario.<br /><br />
                            <b>Progresive Web Aapplication:</b> PWA permite descargar e instalar una versión de la web en el dispositivo (computadora o teléfono movil)<br /><br />
                            <b>Recuperación de cuentas vía email:</b> los cambios de email o contraseñas se realizan por medio de un código que se envía por email automaticamente.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1678583625/portfolio-preview/ezgif-1-895abe7742_omkabj.gif" alt="booking" />

            <div className='project-page-bg-top'></div>
            <div className='project-page-bg-bot'></div>

        </article>
    )
}

export default ClaritaAdmin