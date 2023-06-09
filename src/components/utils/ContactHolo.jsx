import React, { useEffect, useRef } from 'react'
import { typer } from '../background/utils/typer'

const ContactHolo = ({ text, id = 'contact' }) => {
    const str = useRef(null)

    useEffect(() => {
        if (text !== str.current) {
            str.current = text
            typer({
                text: str.current,
                id,
                fast: true
            })
        }
    }, [text, str, id])

    return (
        <div className='contact-holo angle'>
            <div className='hologram-dots left-10 top-10'></div>

            <p id={'line' + id}></p>
        </div>
    )
}

export default ContactHolo