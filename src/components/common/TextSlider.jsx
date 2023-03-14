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