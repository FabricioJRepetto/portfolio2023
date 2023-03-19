import { useEffect, useState } from 'react'

const useObserver = (ref) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        function obCallback(payload) {
            setIsVisible(payload[0].isIntersecting);
        }
        const ob = new IntersectionObserver(obCallback);
        ob.observe(ref.current);

        return () => {
            // eslint-disable-next-line
            if (ref.current) ob.unobserve(ref.current);
        };
    }, [ref]);

    return {
        isVisible
    }
}

export default useObserver