import React from 'react'
import Resume from '../../assets/Brandon_Lam_Resume.pdf'

const CTA = () => {
  return (
    <div className='call-to-action'>
        <a href={Resume} download className='btn'> Download Resume </a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA