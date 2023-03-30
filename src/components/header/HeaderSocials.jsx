import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/brandon-lam-034a74198/"><BsLinkedin/></a>
        <a href="https://github.com/Brrrandon-Lam"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials