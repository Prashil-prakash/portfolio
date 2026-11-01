import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import bannerImg from "../../assets/Banner.png";

const ProjectCard = ({ title, main, demoLink, sourceLink }) => {
  const buttonBase =
    "inline-flex flex-1 whitespace-nowrap h-11 shrink-0 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900";
  return (
    <div className="group box-border flex w-80 min-h-95 shrink-0 flex-col rounded-2xl bg-slate-900/70 border border-slate-800/80 p-3 shadow-xl shadow-slate-950/60 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 md:min-h-110 md:p-6">
      <img
        src={bannerImg}
        alt=""
        className="p-4 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="grow">
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2 text-slate-400">{main}</p>
      </div>
      <div className="mt-auto flex items-center gap-2 p-2 md:p-4">
        {demoLink ? (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40`}
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
            className={`${buttonBase} border border-cyan-500/40 bg-slate-950/60 text-slate-200 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20`}
          >
            <Code2 size={16} className="shrink-0" />
            Source Code
          </a>
        
      </div>
    </div>
  );
};

export default ProjectCard;
