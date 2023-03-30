import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/cube.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Greetings. My name is </h5>
        <h1> Brandon Lam </h1>
        <h5 className="text-light"> Software Developer </h5>
        <CTA/>

        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="cube" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down </a>

      </div>

    </header>
  )
}

export default Header