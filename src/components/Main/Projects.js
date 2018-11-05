import React from 'react'
import Project from  './Project'
import {projects} from '../../lib/projects'

const Projects = ({id}) => {


  // renderProjects = () => {
  //   debugger
  // }

return(
  <div id={id}>
    <h1>Projects</h1>
      {
        projects.map((p,i)=> <Project key={i} project={p} />)
      }
  </div>
) 
}

export default Projects