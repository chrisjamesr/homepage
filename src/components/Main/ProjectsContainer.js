import React from 'react'
import Project from  './Project'
import {projects} from '../../lib/projects'

class ProjectsContainer extends React.Component {
  render(){
  
    return(
      <div id={this.props.id}>
        <h1>Projects</h1>
          {
            projects.map((p,i)=> <Project key={i} project={p} />)
          }
      </div>
    )
  }
}

export default ProjectsContainer