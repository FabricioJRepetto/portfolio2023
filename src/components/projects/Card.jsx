import React, { useState } from 'react'

const Card = ({ title, description, place, image, tags }) => {
    const [hover, setHover] = useState(false)

    const IMG_URL = {
        provider: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1679087971/portfolio-preview/slider-0_idihgp.jpg',
        dog: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171351/portfolio-preview/Screenshot_2022-10-07_163520_ohj04q.png',
        tictactoe: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1679100134/portfolio-preview/ttt_screenshot_nnbxf1_nle5mv.png',
        dietmate: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1679089508/portfolio-preview/dietmatelogo_s5zcwy.png',
        claritaadmin: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1678577562/portfolio-preview/clarita-logo_dt42ui.png',
    }

    return (
        <div onMouseEnter={() => setHover(() => true)}
            onMouseLeave={() => setHover(() => false)}
            className={`card-container ${image ? 'h-40' : ''}`}
            style={place ? { marginLeft: `${place}%` } : {}}>

            <section className={`proyect-card h-16 min-w-fit`}>
                <span className={`proyect-card-title ${hover ? '' : ''}`}>
                    <span className={`mr-2 ${hover ? 'text-sky-500' : ''}`}>/</span>
                    <span className={`${hover ? 'text-rose-500' : ''}`}>/</span>
                    <span className={`${hover ? 'text-orange-500' : ''}`}>/</span>

                    <p className={`${hover ? 'text-white' : ''}`}>{title}</p>
                </span>

                <p className={`pl-14 ml-1 h-6  text-emerald-600 ${hover ? 'opacity-100 text-white' : 'opacity-0'} overflow-x-visible whitespace-nowrap `}>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {description}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            {image &&
                <div className='relative'>
                    <div className={`card-image ${hover ? 'h-32 filter-none ml-12' : ''}`}
                        style={{ backgroundImage: `url(${IMG_URL[image]})` }}>
                    </div>
                </div>}

            {tags &&
                <div className={`card-tags-container`}>
                    <div className={`hologram-dots transition-opacity duration-700 ${hover ? 'opacity-0' : 'opacity-1'} top-0 left-0 aspect-square`}></div>
                    {tags.map((t, i) => (
                        <p key={t + i} style={{ transitionDelay: `${i * 75}ms` }}
                            className={`card-tags ${hover ? 'opacity-1' : 'opacity-0'} `}>
                            {t}
                        </p>
                    ))}
                </div>}

        </div>
    )
}

export default Card