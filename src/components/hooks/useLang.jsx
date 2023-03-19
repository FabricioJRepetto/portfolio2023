import { useState } from 'react'

const useLang = () => {
    const [lang, setLang] = useState('En')

    const switchLang = () => {
        setLang(curr =>
            curr === 'En'
                ? 'Es'
                : 'En'
        )
    }

    return {
        lang,
        switchLang
    }
}

export default useLang