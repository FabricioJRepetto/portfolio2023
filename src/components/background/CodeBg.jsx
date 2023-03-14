import React, { useEffect, useRef } from 'react'
import { typer } from './utils/typer'

const CodeBg = ({ text, angle }) => {
    const str = useRef(null)
    // const str = text.split('λ') || 'Lorem ipsum, dolor sit ametλadipisicing elit. Natus λΩipsa nobis veniam λΩΩimpedit doloremque λΩΩnostrum iste praesentium λ saepe dolorem possimus iusto, aperiam λΩcupiditate λΩΩculpa quo λΩamet, assumenda deleniti λΩΩquidem λ laudantium.'.split('λ')

    //? α: ---
    //? λ: salto de linea
    //? Ω: espacios

    useEffect(() => {
        if (text !== str.current) {
            str.current = text
            typer(str.current)
        }
    }, [text, str])

    return (
        <div className={`flex flex-col h-screen w-screen justify-center text-left absolute top-0 bottom-0 left-2/3 select-none`}>
            <div className='relative'>
                <div className={`hologram  ${angle ? '' : 'text-rose-600'}`}>
                    <div className='hologram-dots'></div>
                    <p id={'line'}></p>
                    <p id='loading-bar'></p>
                </div>
            </div>
        </div>
    )
}

export default CodeBg