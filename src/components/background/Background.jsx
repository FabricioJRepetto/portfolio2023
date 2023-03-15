import React, { useState } from 'react'
import CodeBg from './CodeBg'
import { HOME_CODE } from "../../constants";
import { Svg } from './Svg'

export const Background = () => {
    const [angle, setAngle] = useState(false)

    setTimeout(() => {
        setAngle(true)
    }, 2300);

    return (
        <div className='fade-in relative'>
            <div className='absolute inset-0'>
                <Svg />
                <div className='absolute h-screen top-0 left-2/3'>
                    <CodeBg text={HOME_CODE} id='main' angle={angle} />
                </div>
            </div>
        </div>
    )
}
