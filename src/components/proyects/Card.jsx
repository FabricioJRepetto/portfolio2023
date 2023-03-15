import React, { useState } from 'react'

const Card = ({ title, description, space }) => {
    const [hover, setHover] = useState(false)

    return (
        <div className={`proyect-card mb-8 h-16 cursor-pointer ${space || ''}`}
            onMouseEnter={() => setHover(() => true)}
            onMouseLeave={() => setHover(() => false)}>
            <span className={`proyect-card-title ${hover ? '' : ''}`}>
                <span className={`mr-2 ${hover ? 'text-sky-500' : ''}`}>/</span>
                <span className={`${hover ? 'text-rose-500' : ''}`}>/</span>
                <span className={`${hover ? 'text-orange-500' : ''}`}>/</span>

                <p className={`${hover ? 'text-white' : ''}`}>{title}</p>
            </span>

            <p className={`pl-14 ml-1 h-6 ${hover ? 'opacity-100' : 'opacity-0'} overflow-hidden `}>
                <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                {description}
                <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
            </p>
        </div>
    )
}

export default Card