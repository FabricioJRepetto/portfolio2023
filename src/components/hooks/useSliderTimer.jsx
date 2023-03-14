import { useEffect, useRef, useState } from 'react'

const useSliderTimer = (delay, waiting) => {
    const timer = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        // delay inicial basado en Index
        setTimeout(() => {
            // forzar primer loop
            setVisible(true) //* ON
            const timeout = setTimeout(() => {
                setVisible(() => false)
                clearTimeout(timeout)
            }, 4000); //! OFF

            // esperar que pasen los demás textos
            // intervalo continúa con los siguientes loops
            timer.current = setInterval(() => {
                setVisible(() => true) //* ON
                const timeout = setTimeout(() => {
                    setVisible(() => false)
                    clearTimeout(timeout)
                }, 4000); //! OFF
            }, waiting)
        }, delay);

        return () => {
            clearInterval(timer.current)
        }
    }, [delay, timer, waiting])

    return { visible }
}

export default useSliderTimer