import React from "react";
import { ExternalLink, Code2 } from "lucide-react";
import bannerImg from "../../assets/Banner.png";

const ProjectCard = ({ title, main, demoLink, sourceLink }) => {
  const buttonBase =
    "inline-flex w-36 h-11 shrink-0 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e19]";
  return (
    <div className="group p-3 md:p-6 flex flex-col justify-between w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-cyan-500/20">
      <img
        src={bannerImg}
        alt=""
        className="p-4 transition-transform duration-500 group-hover:scale-105"
      />
      <div>
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2 ">{main}</p>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3 p-2 md:p-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} bg-linear-to-r from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40`}
          >
            <ExternalLink size={16} className="shrink-0" />
            Live Demo
          </a>
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
