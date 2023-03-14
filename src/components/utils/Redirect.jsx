import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Redirect = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/home')
        }, 2700);

        return () =>
            clearTimeout(timeout)
    }, [navigate])

    return (
        <div></div>
    )
}
