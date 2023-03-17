import React, { useEffect } from 'react'
import { PowerGlitch } from "powerglitch";

const ProviderAnim = () => {
    useEffect(() => {
        PowerGlitch.glitch(".provider-glitch",
            {
                backgroundColor: "transparent",
                hideOverflow: false,
                timing: {
                    duration: 10000,
                    iterations: "Infinity",
                },
                glitchTimeSpan: {
                    start: 0.6,
                    end: 0.7,
                },
                shake: {
                    velocity: 15,
                    amplitudeX: 0.1,
                    amplitudeY: 0.2,
                },
                slice: {
                    count: 3,
                    velocity: 15,
                    minHeight: 0.03,
                    maxHeight: 0.15,
                    hueRotate: true,
                },
            })
    }, [])

    return (
        <div className='provider-glitch'></div>
    )
}

export default ProviderAnim