import React from 'react'
// import github from '../../../images/icons/github.svg'
import github from '../../../images/icons/iconmonstr-github.svg'

const Project = ({project}) => {
  const projectTileStyle = {
      width: "90%",
      border: "1px solid black",
      alignSelf: "center",
      margin: "5% auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flexStart"
    }
  
  return (
    <div className="project-tile"
         style={projectTileStyle}
    >
      <h3 style={{alignSelf: "center", margin:".5em auto"}}>{project.name}</h3>
      <div className="projectBody" style={{padding: "0 5%"}}>
        <p>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <img alt="Instagram Icon"className="icon" src={github}/>
          </a>
        </p>
        
        { !!project.url ? <p><a href={project.url}>Live Link</a></p> : null}
        <p>{project.description}</p>

      </div>
    </div>
  )
}

export default Project
