import React from "react";
import avatarImg from "../assets/working-removebg-preview.png";
import myCv from "../assets/Prashil_Prakash_CV.pdf";
import TextChange from "./TextChange";

function Home() {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 ">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-snug min-h-17.5 md:min-h-35">
          <TextChange />
        </h1>

        <p className="text-sm md:text-2xl tracking-tight">
          I'm a passionate developer specializing in creating immersive web
          experiences.
        </p>
        <a
          href={myCv}
          download="Prashil_Prakash_CV.pdf"
          className="inline-block mt-5 md:mt-10 text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-center"
        >
          Download CV
        </a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
}
export default Home;
