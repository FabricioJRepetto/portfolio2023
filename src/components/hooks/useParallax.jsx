import { useEffect, useState } from 'react'

export const useParallax = () => {
    const [scroll, setScroll] = useState(0)

    const cb = () => {
        console.log(window.scrollY);
        setScroll(window.scrollY * 0.075)
    }

    // useEffect(() => {
    //     window.addEventListener('scroll', cb)

    //     return () => {
    //         window.removeEventListener('scroll', cb)
    //     }
    // }, [])

    return {
        scroll
    }
}
