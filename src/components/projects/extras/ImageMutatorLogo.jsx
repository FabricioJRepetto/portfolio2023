import React from 'react'
import Blob from './Blob'
import logo from '../../../assets/images/im-logo-claro.png'

const ImageMutatorLogo = () => {
    return (
        <div className='imagemutator-logo-container'>
            <img src={logo} alt='name' />
            <Blob />
        </div>
    )
}

export default ImageMutatorLogo