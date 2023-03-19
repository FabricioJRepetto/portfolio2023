import React, { useEffect, useState } from 'react'
import { HAND_1, HAND_2 } from '../../constants'

const ContactHand = () => {
    const [tick, setTick] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setTick(tick => !tick)
        }, 1300);

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <div className='contact-holo angle'>
            <div className='hologram-dots left-10 top-10'></div>

            <p>{tick ? HAND_1 : HAND_2}</p>
        </div>
    )
}

export default ContactHand