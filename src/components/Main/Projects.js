import React from 'react'
import Project from  './Project'
import {projects} from '../../lib/projects'

const Projects = () => {


  // renderProjects = () => {
  //   debugger
  // }

return(
  <div>
    <h1>Projects</h1>
      {
        projects.map((p,i)=> <Project key={i} project={p} />)
      }
  </div>
) 
}

export default Projects