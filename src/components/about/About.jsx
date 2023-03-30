import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id="about"> 
      <h5> Things To Know </h5>
      <h2> About Me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__content">
            <p>
            My name is Brandon Lam, and I am a software developer. I graduated from Oregon State University with a Bachelor's Degree in Computer Science in June 2022.
            My primary interests are in software engineering and game development. I have worked at a local Asian grocery store called Manila Market in Beaverton, Oregon 
            and looking for work in the tech industry! My primary interests regarding programming are in C++, Game Programming and Graphics Programming, but I have also done some work in Unity.
            I have some experience working in both front and backend web development, and some exposure to Python. 
            </p>
            <br/>
            <p>
            Outside of programming, my main hobby is singing. I have also dabbled in digital art, 3D modelling and music production.
            </p>
            <a href="#contact" className='btn btn-primary'> Let's Chat!</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About