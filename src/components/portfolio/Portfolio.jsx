import React from 'react'
import './portfolio.css'
import LIMITLESS_IMG from '../../assets/limitless_prototype.png'
import PRIME_IMG from '../../assets/prime_prototype.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h2> Portfolio </h2>
    
    <div className="container portfolio__container">
      {/* Third Person RPG Item */}
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={LIMITLESS_IMG} alt="Limitless Screenshot" />
        </div>
        <h3> Limitless (In Progress) </h3>
        <a href="https://github.com/Brrrandon-Lam/Limitless" className='btn' target='_blank'>GitHub</a>
        {/*<a href="https://youtube.com" className='btn'> YouTube </a>*/}
      </article>

      {/* Third Person Shooter Item */}
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={PRIME_IMG} alt="Prime Screenshot"/>
        </div>
        <h3> Prime - Third Person Shooter </h3>
        <a href="https://github.com/Brrrandon-Lam/SimpleShooter" className='btn' target='_blank'>GitHub</a>
        <a href="https://www.youtube.com/watch?v=4-7_uJP134E&list=PLiF2hi9h3cJhIPPpXlIM-6fT3PkXOLgXp&index=19" className='btn'> YouTube </a>
      </article>

      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={PRIME_IMG} alt="Prime Screenshot"/>
        </div>
        <h3> Prime - Third Person Shooter </h3>
        <a href="https://github.com/Brrrandon-Lam/SimpleShooter" className='btn' target='_blank'>GitHub</a>
        {/*<a href="https://youtube.com" className='btn'> YouTube </a>*/}
      </article>
    </div>


    </section>
  )
}

export default Portfolio