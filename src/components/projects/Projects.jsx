import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PROYECTS_CODE } from '../../constants'
import CodeBg from '../background/CodeBg'
import Card from './Card'

const Projects = () => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(false)

    const projects = [
    ]

    return (
        <>
            <article className='h-fit col-span-7 flex flex-col'>
                <h2 className="text-white font-bold tracking-tighter text-8xl mb-16">Proyectos</h2>

                <div className="w-fit self-center z-10 border">

                    <label onClick={() => navigate('/projects/claritaadmin')}>
                        <Card title='Cabañas Clarita' description='Sistema de gestión' image='claritaadmin' />
                    </label>

                    <label onClick={() => navigate('/projects/dietmate')}>
                        <Card title='Diet Mate' description='Organizador de comidas' image='dietmate' />
                    </label>

                    <label onClick={() => navigate('/projects/tictactoe')}>
                        <Card title='TicTacToe' description='Juego online' image='tictactoe' />
                    </label>

                    <label onClick={() => navigate('/projects/providerstore')}>
                        <Card title='Provider Store' description='Ecommerce' image='provider' />
                    </label>

                    <label onClick={() => navigate('/projects/doghouse')}>
                        <Card title='Dog House' description='Colección de perros' image='dog' />
                    </label>
                </div>

                <h2 className="font-bold tracking-tighter text-4xl my-8">En desarrollo...</h2>

                <div className="pl-40 w-3/4">
                    <label onClick={() => null}>
                        <Card title='Image Mutator' description='Manipulación de imágenes' />
                    </label>
                </div>

            </article>

            {/* <article className='col-span-4 flex flex-col gap-8 pt-28 border'>
                
            </article> */}

            <div className='absolute left-2/3 top-0 h-full'>
                <CodeBg text={PROYECTS_CODE} id='proyects' loadingAnim />
            </div>
        </>
    )
}

export default Projects