import { useMemo, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { CLARITAADMIN, DIETMATE, DOGHOUSE, HOME_CODE, PROVIDERSTORE, TICTACTOE } from '../../constants'

const useCode = () => {
    const code = useRef(HOME_CODE)
    const { pathname } = useLocation()

    useMemo(() => {
        switch (pathname) {
            case '/projects/claritaadmin':
                code.current = CLARITAADMIN
                break;

            case '/projects/dietmate':
                code.current = DIETMATE
                break;

            case '/projects/tictactoe':
                code.current = TICTACTOE
                break;

            case '/projects/providerstore':
                code.current = PROVIDERSTORE
                break;

            case '/projects/doghouse':
                code.current = DOGHOUSE
                break;

            default:
                code.current = HOME_CODE
                break;
        }
    }, [pathname])

    return {
        CODE: code.current
    }
}

export default useCode