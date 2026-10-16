import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 ">
        <ProjectCard
          title="Myntra Clone"
          main="A frontend e-commerce layout built with HTML, CSS, and JavaScript featuring an interactive product grid and a dynamic, live-updating shopping cart section.
"
        />
        <ProjectCard
          title="Movie App"
          main="A dynamic frontend movie discovery application built with React and JavaScript featuring an interactive, real-time film search engine and a custom-curated favorites section powered by the TMDB API.
"
        />
        <ProjectCard
          title="Todo App"
          main="A minimalist React + Vite task management app built with native React state, custom CSS Modules, structural component workflows, and smooth empty-state layouts.
"
        />
      </div>
    </div>
  );
}

export default Projects;
