import React from 'react'
// import github from '../../../images/icons/github.svg'
import github from '../../../images/icons/iconmonstr-github.svg'
import globe from '../../../images/icons/iconmonstr-globe.svg'

import '../../styles/project.scss'

const Project = ({project}) => {
  return (
    <div className="project-tile">

      <h2>
        {project.name}
      </h2>

      <div className="project-body">

        <p>{project.description}</p>

      </div>

      <div className="project-links">

        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
          <img alt="Github Icon" 
               title="Github Repo"
               className="icon-sm" 
               src={github}
          />
        </a>

        { 
          !!project.url ? 
          <a href={project.url}><img alt="Globe Icon" 
                                     className="icon-sm" 
                                     src={globe} 
                                     title="Live Site"
                                     /></a>
          : null
        }

      </div>

    </div>
  )
}

export default Project
