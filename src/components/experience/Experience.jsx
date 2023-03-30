import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h2> Experience </h2>
      <div className="experience__container">
        <div className="experience__work">
          <h3> Work Experience </h3>
          <h3> Manila Market - Inventory Associate </h3>
          <p> Manila Market is a local Asian grocery store, where my primary role was to drive a truck and pick up deliveries. I would travel with my supervisors to our various suppliers and
            purchase produce from them, 3 times per week, where I would be responsible for loading and unloading shipments in addition to quick inspection of purchased goods.
          </p>
        </div>
        <div className="experience__programming">
          <h3> Programming Languages & Tools </h3>
          <ul>
            <h5> Experienced </h5>
            <li> C++, Unreal Engine 5, Git, GitHub, Visual Studio Code, Visual Studio 2019, Visual Studio 2022, Mathematics, Graphics Programming Concepts </li>
            <h5> Intermediate </h5>
            <li> OpenGL, GLSL, HTML, CSS, MySQL, Notion </li>
            <h5> Beginner </h5>
            <li> Unity, C#, Vulkan, Python, JavaScript, Docker, MongoDB, Unity, C#, Jira, OpenMP, CUDA </li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Experience