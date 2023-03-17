import React from 'react'
import DogHouseAnim from '../extras/DogHouseAnim'

const DogHouse = () => {
    return (
        <div>
            <h1>Dog House</h1>

            <div className='h-80 relative'>
                <DogHouseAnim />
            </div>
        </div>
    )
}

export default DogHouse