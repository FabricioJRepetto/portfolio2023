import React, { useState } from 'react'
import CodeBg from './CodeBg'
import { Svg } from './Svg'
import useCode from '../hooks/useCode';
// import { useParallax } from '../hooks/useParallax';

export const Background = () => {
    const [angle, setAngle] = useState(false)
    const { CODE } = useCode()
    // const { scroll } = useParallax()

    setTimeout(() => {
        setAngle(true)
    }, 2300);

    return (
        <div className='fade-in relative'>
            <div className='absolute inset-0'>
                <div className='transition-transform duration-75'
                //  style={{ transform: `translateY(${scroll || 0}px)` }}
                >
                    <Svg />
                </div>

                <div className='absolute h-screen top-0 left-2/3'>
                    <CodeBg text={CODE} id='main' angle={angle} loadingAnim />
                </div>
            </div>
        </div >
    )
}
