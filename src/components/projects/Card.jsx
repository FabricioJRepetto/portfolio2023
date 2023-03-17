import React, { useState } from 'react'

const Card = ({ title, description, space, image }) => {
    const [hover, setHover] = useState(false)

    const IMG = {
        provider: <img src='https://res.cloudinary.com/dsyjj0sch/image/upload/v1679087971/portfolio-preview/slider-0_idihgp.jpg' alt='provider' />,
        dog: <img src='https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171351/portfolio-preview/Screenshot_2022-10-07_163520_ohj04q.png' alt='doghouse' />,
        tictactoe: <img src='https://res.cloudinary.com/dsyjj0sch/image/upload/v1668896984/portfolio-preview/ttt_screenshot_nnbxf1.png' alt='tictactoe' />,
        dietmate: <img src='https://res.cloudinary.com/dsyjj0sch/image/upload/v1679089508/portfolio-preview/dietmatelogo_s5zcwy.png' alt='dietmate' />,
        claritaadmin: <img src='https://res.cloudinary.com/dsyjj0sch/image/upload/v1678577562/portfolio-preview/clarita-logo_dt42ui.png' alt='claritaadmin' />,
    }
    const IMG_URL = {
        provider: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1679087971/portfolio-preview/slider-0_idihgp.jpg',
        dog: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1665171351/portfolio-preview/Screenshot_2022-10-07_163520_ohj04q.png',
        tictactoe: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1668896984/portfolio-preview/ttt_screenshot_nnbxf1.png',
        dietmate: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1679089508/portfolio-preview/dietmatelogo_s5zcwy.png',
        claritaadmin: 'https://res.cloudinary.com/dsyjj0sch/image/upload/v1678577562/portfolio-preview/clarita-logo_dt42ui.png',
    }

    return (
        <div className='mb-4 flex justify-center items-center'>

            <section className={`proyect-card h-16 cursor-pointer ${space || ''}`}
                onMouseEnter={() => setHover(() => true)}
                onMouseLeave={() => setHover(() => false)}>
                <span className={`proyect-card-title ${hover ? '' : ''}`}>
                    <span className={`mr-2 ${hover ? 'text-sky-500' : ''}`}>/</span>
                    <span className={`${hover ? 'text-rose-500' : ''}`}>/</span>
                    <span className={`${hover ? 'text-orange-500' : ''}`}>/</span>

                    <p className={`${hover ? 'text-white' : ''}`}>{title}</p>
                </span>

                <p className={`pl-14 ml-1 h-6 min-w-fit ${hover ? 'opacity-100' : 'opacity-0'} overflow-x-visible whitespace-nowrap `}>
                    <b className=' text-emerald-600 font-normal -ml-5 mr-2'>{`<`}</b>
                    {description}
                    <b className='text-emerald-600 font-normal ml-3 -mr-6'>{`/>`}</b>
                </p>
            </section>

            {image &&
                <div className={`card-image border ${hover ? 'h-32 filter-none' : ''}`}
                    style={{ backgroundImage: `url(${IMG_URL[image]})` }}
                >
                    {/* {IMG[image]} */}
                </div>}
        </div>
    )
}

export default Card