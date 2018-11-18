import React from 'react'
import Project from  './Project'
import {projects} from '../lib/projects'

const Projects = ({id}) => {


  // renderProjects = () => {
  //   debugger
  // }

return(
  <div id="projects" className="section">
    {/*<h1>Projects</h1>*/}
    <div className="scroll-container">
      {
        projects.map((p,i)=> <Project key={i} project={p} />)
      }
    </div>
  </div>
) 
}

export default Projects