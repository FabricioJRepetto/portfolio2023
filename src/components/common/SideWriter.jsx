import React from 'react'
import useSliderTimer from '../hooks/useSliderTimer'

const SideWriter = ({ text, color, delay, waiting }) => {
    const { visible } = useSliderTimer(delay, waiting)

    return (
        <>
            {visible
                ? <div className={`${color} flex absolute top-0 left-1/2 -translate-x-1/2`}>
                    {text?.split('').map((letter, i) => (
                        <div key={letter + i}
                            className='w-fit relative side-fade-in'
                            style={{ animationDelay: `${(text.length - i) * 100}ms` }}>
                            <p>{letter}</p>
                        </div>
                    ))}
                </div>
                : null}
        </>
    )
}

export default SideWriter