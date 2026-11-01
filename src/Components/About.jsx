import React from "react";
import AboutImg from "../assets/About-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

function About() {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-slate-900/60 border border-slate-800/80 shadow-2xl shadow-cyan-950/20 backdrop-blur-sm mx-0 md:mx-20 rounded-2xl p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-cyan-400">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About Img" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-cyan-400 shrink-0" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-slate-100">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md text-slate-400 leading-tight">
                 I build dynamic, responsive web applications using React, JavaScript, and modern CSS frameworks like Tailwind and Bootstrap.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-cyan-400 shrink-0" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-slate-100">
                  UI Developer
                </h1>
                <p className="text-sm md:text-md text-slate-400 leading-tight">
                  I rapidly prototype and style clean, pixel-perfect user interfaces utilizing utility-first CSS and component-based architectures.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-cyan-400 shrink-0" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal text-slate-100">
                  Responsive Web Designer
                </h1>
                <p className="text-sm md:text-md  text-slate-400 leading-tight">
                 I design and develop mobile-first, adaptive layouts that ensure a seamless and stunning user experience across all screen sizes.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
