import React, { useEffect, useRef } from 'react'
import { typer } from './utils/typer'

const CodeBg = ({ text, id, angle = false, loadingAnim = false }) => {
    const str = useRef(null)

    // const str = text.split('λ') || 'Lorem ipsum, dolor sit ametλadipisicing elit. Natus λΩipsa nobis veniam λΩΩimpedit doloremque λΩΩnostrum iste praesentium λ saepe dolorem possimus iusto, aperiam λΩcupiditate λΩΩculpa quo λΩamet, assumenda deleniti λΩΩquidem λ laudantium.'.split('λ')

    //? α: ---
    //? λ: salto de linea
    //? Ω: espacios

    useEffect(() => {
        if (text !== str.current) {
            str.current = text
            typer({
                text: str.current,
                id,
                loadingAnim: true
            })
        }
    }, [text, str, id, loadingAnim])

    return (
        <div className={`flex flex-col h-full w-max justify-center text-left absolute top-0 bottom-0 left-0 select-none`}>
            <div className='relative'>
                <div className={`hologram transition-transform duration-500 ${angle ? 'angle' : ''}`}>
                    <div className='hologram-dots'></div>
                    <p id={'line' + id}></p>
                    <p id={'loading-bar' + id}></p>
                </div>
            </div>
        </div>
    )
}

export default CodeBg