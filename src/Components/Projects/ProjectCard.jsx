import React from "react";
import bannerImg from "../../assets/Banner.png";

const ProjectCard = ({ title,main,demoLink,sourceLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col justify-between w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img src={bannerImg} alt="" className="p-4" />
      <div><h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2 ">{main}</p></div>
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4 justify-start items-center">
        {demoLink && (
          <button 
            onClick={() => window.open(demoLink, "_blank", "noopener,noreferrer")}
            className="md:mt-10 text-white py-2 w-28 text-center text-sm md:text-md hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Demo
          </button>
        )}
        <button 
          onClick={() => window.open(sourceLink, "_blank", "noopener,noreferrer")}
          className="md:mt-10 text-white py-2 w-28 text-center text-xs md:text-sm hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] flex items-center justify-center"
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
