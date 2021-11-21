import {projects} from "../data.json";
import {useState} from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

function Projects() {
    const [project, setProject] = useState(projects[0]);

    const [modalShow, setModalShow] = useState(false);

    const projectList = projects.map(project =>
        <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={project.title}
            style={{cursor: "pointer"}}
        >
            <span className="portfolio-item d-block">
              <div className="projects" onClick={() => {
                  setProject(project);
                  setModalShow(!modalShow);
              }}>
                  <img
                      src={project.images[0]}
                      alt="projectImages"
                      height="230"
                      style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{project.year}</span>
                  <br/>
                  <p className="project-title-settings mt-3">
                    {project.title}
                  </p>
              </div>
            </span>
        </div>
    );
    return (
        <section id="portfolio">
            <div className="col-md-12">
                <h1 className="section-title" style={{color: "black"}}>Projects</h1>
                <div className="col-md-12 mx-auto">
                    <div className="row justify-content-center mx-auto">{projectList}</div>
                </div>
                <ProjectDetailsModal show={modalShow} onHide={() => setModalShow(!modalShow)} data={project}/>
            </div>
        </section>
    );
}

export default Projects;
