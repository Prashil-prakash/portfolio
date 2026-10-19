import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import bannerImg from "../../assets/Banner.png";

const ProjectCard = ({ title, main, demoLink, sourceLink }) => {
  const buttonBase =
    "inline-flex flex-1 whitespace-nowrap h-11 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e19]";
  return (
    <div className="group box-border flex w-80 min-h-95 shrink-0 flex-col rounded-2xl bg-[#0c0e19] p-3 shadow-xl shadow-slate-900 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-cyan-500/20 md:min-h-110 md:p-6">
      <img
        src={bannerImg}
        alt=""
        className="p-4 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="grow">
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2 ">{main}</p>
      </div>
      <div className="mt-auto flex items-center gap-2 p-2 md:p-4">
        {demoLink ? (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} bg-linear-to-r from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40`}
          >
            <ExternalLink size={16} className="shrink-0" />
            Live Demo
          </a>
        ) : (
  <div className={`${buttonBase} invisible`} aria-hidden="true" />
)}

        
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} border border-slate-700 bg-white/4 text-slate-200 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300`}
          >
            <Code2 size={16} className="shrink-0" />
            Source Code
          </a>
        
      </div>
    </div>
  );
};

export default ProjectCard;
