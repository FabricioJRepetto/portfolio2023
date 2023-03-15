import React from 'react'
import SideWriter from './SideWriter'

const TextSlider = ({ text }) => {
    const color = [
        'red',
        'blue',
        'orange',
        'green',
    ]

    //: TODO: dejar de renderizar on blur

    return (
        <div className='relative mr-16'>
            <div className='slider-circles'>
                <div className='border-orange-500'></div>
                <div style={{ animationDelay: '300ms' }} className='border-sky-500'></div>
                <div style={{ animationDelay: '600ms' }} className='border-rose-500'></div>
            </div>
            <div className='hologram-dots h-32 -mt-4 animate-pulse'></div>

            {text?.map((t, i) => (
                <SideWriter key={t + i} text={t}
                    color={color[i]}
                    delay={i * 3500}
                    waiting={text.length * 3500} />
            ))}
        </div>
    )
}

export default TextSlider