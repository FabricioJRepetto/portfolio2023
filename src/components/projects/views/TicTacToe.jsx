import React from 'react'
import Dash from '../extras/Dash'
import { TicTacToeAnim } from '../extras/TicTacToeAnim'

const TicTacToe = () => {
    const lang = 'Es'

    return (
        <article className='project-page'>

            <header className='project-header-container'>
                <section className='project-header'>
                    <h1>TicTacToe Io</h1>

                    <div>
                        <h2>{`/// SPA + RESTful API + Web Sockets`}</h2>

                        <div>
                            <p>React</p>
                            <p>Express</p>
                            <p>Web Sockets</p>
                        </div>

                        <p className='text-xl  mb-8'>
                            <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                            Proyecto personal.<br />
                            Juego online y chat logrado con web sockets.<br />
                            Diseño de API y UI/UX.
                            <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                        </p>

                        <a className='pr-8' href='https://tictactoeio.vercel.app' target='_blank' rel='noreferrer'>
                            <b>Web</b>
                        </a>
                        <a className='pr-8' href='https://github.com/FabricioJRepetto/tictactoe-io' target='_blank' rel='noreferrer'>
                            <b>Repo. [front+back]</b>
                        </a>

                    </div>
                </section>

                <section className='project-logo'>
                    <TicTacToeAnim />
                </section>
            </header>

            <section className='col-span-4 mb-32'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'What is TicTacToe?' : '¿Qué es TicTacToe?'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            This project is ment to explore the posibilities given by full-duplex connections. Using WebSockets (Socket.Io), I developed an online mini game, TicTacToe, and a simple chat.
                        </>
                        : <>
                            La finalidad de este proyecto es explorar las posibilidades ofrecidas por la conección bidireccional. Utilizando WebSockets (Socket.Io), desarrollé un mini juego online, tres en linea, y un chat simple.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Online' : 'En linea'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            You can play with a friend, just give them the room code or the url and have fun!
                        </>
                        : <>
                            Puede jugar con un amigo, simplemente pasale el codigo de la sala o la url y diviertanse!
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1668812931/portfolio-preview/ezgif-1-ae6366084a_jphbfu.gif" alt="users" />

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1668812932/portfolio-preview/ezgif-1-97ea9f8423_yppw9e.gif" alt="users" />

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Room chat' : 'Chat de sala'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            There is a simple chat available while playing with another player, just in case you need it. Be friendly!
                        </>
                        : <>
                            Hay un chat disponible mientras se juega contra otro jugador, por si lo necesitas. Se amigable!
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Play against a bot' : 'Juega contra un bot'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            If you just wanna test the app or don't have any friend available at the moment, there is a simple bot waiting to play with you.
                        </>
                        : <>
                            Si solo quieres probar la aplicación o no tienens ningun amigo disponible de momento, hay un bot simple esperandote para jugar contigo.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <div className='project-page-bg-top'></div>
            <div className='project-page-bg-bot'></div>

        </article>
    )
}

export default TicTacToe