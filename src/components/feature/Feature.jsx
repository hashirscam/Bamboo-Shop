import React from 'react'
import { Link } from 'react-router-dom'
import './feature.css'

const Feature = ({image,header,text,button,subheader,image_first, link}) => {
  return (
    <div className='eco__feature'>
      {image_first && <div className='eco__feature-img'>
        <img src={image}
        alt='feature-img'
        />
      </div>}
      <div className='eco__feature-content'>
        <p className='eco__feature-subheader'>
          {subheader} 
        </p>
        <h1 className='eco__feature-header'>
        {header}
        </h1>
        <p className='eco__feature-text'>
        {text}
        </p>
        {button==="" ? null :
        <Link to={link} className='eco__feature-button button'>
          {button}
        </Link>}
      </div>
      {!image_first && <div className='eco__feature-img'>
        <img src={image}
        alt='feature-img'
        />
      </div>}
    </div>
  )
}

export default Feature