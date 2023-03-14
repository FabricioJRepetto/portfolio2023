import React, { useState } from 'react'
import CodeBg from './CodeBg'
import { HOME_CODE } from "../../constants";

export const Background = () => {
    const [angle, setAngle] = useState(true)

    return (
        <div className='fade-in'>
            <CodeBg text={HOME_CODE} angle={angle} />
        </div>
    )
}
