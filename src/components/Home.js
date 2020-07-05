import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects.json"

class Home extends Component {

state={
  projects
}

render() {
    return (
    <div className="wrapper">
      {this.state.projects.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          repository={project.repository}
          application={project.application}
        />
      ))}
    </div>
    )
  }

}

export default Home