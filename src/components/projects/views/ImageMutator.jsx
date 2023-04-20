import React from 'react'
import { isMobile } from '../../utils/isMobile'
import Dash from '../extras/Dash'
import ImageMutatorLogo from '../extras/ImageMutatorLogo'

const ImageMutator = ({ lang }) => {
    const mobile = isMobile()

    return (
        <article className='project-page'>

            <header className='project-header-container'>
                <section className='project-header'>
                    <h1>Image Mutator</h1>

                    <div>
                        <h2>{`/// SPA `}</h2>

                        <div>
                            <p>React</p>
                            <p>TypeScript</p>
                            <p>SOLID</p>
                        </div>

                        <p className='text-xl mb-8'>
                            <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                            {lang === 'En'
                                ? <>
                                    Personal project.<br />
                                    Images modificator based on canvas.
                                </>
                                : <>
                                    Proyecto personal.<br />
                                    Modificador de imagenes utilizando canvas.
                                </>}
                            <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                        </p>

                        <a href='https://image-mutator.vercel.app' target='_blank' rel='noreferrer'>
                            <b>Web</b>
                        </a>
                        <a href='https://github.com/FabricioJRepetto/Image-Mutator' target='_blank' rel='noreferrer'>
                            <b>Repo.</b>
                        </a>

                    </div>
                </section>

                <section className='project-logo'>
                    {!mobile && <ImageMutatorLogo />}
                </section>
            </header>

            <section className='col-span-4 mb-32'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'What is Image Mutator?' : '¿Qué es Image Mutator?'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            This is mainly a practice project, in which I apply TypeScript and understand its advantages.<br />
                            The main function is to style images, either standard or Gif, by taking the information from the file and using it to replace it with characters or curly brackets.<br />
                            It is a simple application but it helped me to better understand new tools like TypeScript or web workers.
                        </>
                        : <>
                            Este es un proyecto principalmente de práctica, en el que aplico TypeScript y entiendo sus ventajas.<br />
                            La principal función es estilizar imágenes, ya sean standard o Gif, tomando la información del archivo y utilizandola para reemplazarla por caracteres o curculos.<br />
                            Es una aplicación simple pero me ayudó a entender mejor nuevas herramientas como TypeScript o los web workers.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <section className='col-span-4'>
                <h2>
                    <Dash />
                    {lang === 'En' ? 'Decoding GIFs' : 'Decodificando GIFs'}
                </h2>

                <p>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {lang === 'En'
                        ? <>
                            There are three steps in the gif file conversion process:<br />
                            •Decoding: the file is separated into images frame by frame.<br />
                            •Mutation: each image is stylized using a canvas to obtain the information of each frame and saved in a buffer.<br />
                            •Encoding: the buffer is saved to encode a new gif file with the new information of each frame.<br />

                        </>
                        : <>
                            El proceso de conversión de los archivos gif cuenta con tres pasos:<br />
                            •Decodificación: se separa el archivo en imagenes frame a frame.<br />
                            •Mutación: se estiliza cada imagen utilizando un canvas para obtener la información de cada frame y se guarda en un buffer.<br />
                            •Codificación: se el buffer para codificar un nuevo archivo gif con la nueva información de cada frame.
                        </>}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1682010658/portfolio-preview/ezgif-1-5d40293936_chffni.gif" alt="preview" />

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1682012904/portfolio-preview/mutated_ezgif-5-ef2ca879c4_iaeiaf.gif" alt="users" />

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1682012905/portfolio-preview/mutated_robot-head_nvqxpj.gif" alt="users" />

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1682012905/portfolio-preview/mutated_eyes_2_lwekrr.gif" alt="users" />

            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1682013994/portfolio-preview/mutated_E6BlNuyWUAANeDZ_gqfflt.png" alt="users" />

            <div className='project-page-bg-top'></div>
            <div className='project-page-bg-bot'></div>

        </article >
    )
}

export default ImageMutator