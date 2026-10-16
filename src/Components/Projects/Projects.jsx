import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";

function Projects() {
  return (
    <div id="Projects" className=" p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 flex flex-wrap gap-8 justify-center items-stretch max-w-275 mx-auto w-full">
       {ProjectData.map((project) => (
          <ProjectCard
            key={project.id} 
            title={project.title}
            main={project.main}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
