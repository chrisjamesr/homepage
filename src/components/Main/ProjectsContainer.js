import React from 'react'
import Project from  './Project'
import {projects} from '../../lib/projects'

class ProjectsContainer extends React.Component {


  renderProjects = () => {
    debugger
  }

  render(){
    
    return(
      <div>
        <h1>Projects</h1>
      {console.log(projects())    }
        {
          
          projects().map((p,i)=>{
            return <Project key={i} project={p} />
          })
        }
      </div>
    )
  }
}

export default ProjectsContainer