import { useEffect, useState } from 'react'

const useScroll = () => {
    const [blur, setBlur] = useState(false)

    const controlSubsectionBar = () => {
        window.scrollY > 10 && setBlur(true);
        window.scrollY < 10 && setBlur(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlSubsectionBar);

        return () => {
            window.removeEventListener("scroll", controlSubsectionBar);
        };
    }, [])

    return {
        blur
    }
}

export default useScroll