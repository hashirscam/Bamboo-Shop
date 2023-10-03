import React from 'react'
import './header.css'
import { Navbar } from '../../components'

const Header = () => {
  return (
    <div className='eco__header sticky-nav'>
    <p className='eco__discount'>
      Free Plastic-Free Shipping on Orders Over $80 | Happiness Guaranteed
    </p>
    <Navbar />
    </div>
  )
}

export default Header