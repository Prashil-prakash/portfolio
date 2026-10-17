import React from "react";
import avatarImg from "../assets/working-removebg-preview.png";
import myCv from "../assets/Prashil_Prakash_CV.pdf";
import TextChange from "./TextChange";

function Home() {
  return (
    <section
      id="Home"
      className="flex min-h-[85vh] w-full flex-col-reverse items-center
      justify-center gap-12 px-6 py-12 text-white
      md:flex-row md:justify-between md:gap-8 md:px-20 md:py-20"
    >
      
      <div className="w-full text-center md:w-1/2 md:pt-10 md:text-left">
        <h1
          className="min-h-28 text-4xl font-bold leading-tight tracking-tight
          bg-linear-to-r from-white via-sky-200 to-sky-400
          bg-clip-text text-transparent
          md:min-h-36 md:text-6xl"
        >
          <TextChange />
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed
          text-gray-300 md:mx-0 md:text-xl">
          I'm a passionate developer specializing in creating
          immersive web experiences.
        </p>

        <div className="mt-8">
          <a
            href={myCv}
            download="Prashil_Prakash_CV.pdf"
            className="inline-flex items-center justify-center
            rounded-full border border-sky-400/40 bg-sky-500/10
            px-7 py-3 font-semibold text-sky-200
            transition-all duration-300
            hover:scale-105 hover:border-sky-300
            hover:bg-sky-400/20
            hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
          >
            Download CV
            <span className="ml-2 transition-transform duration-300
              group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* Right Avatar */}
      <div className="relative flex w-full items-center justify-center
        md:w-1/2">
        <div className="absolute h-56 w-56 rounded-full
          bg-sky-500/20 blur-3xl md:h-80 md:w-80" />

        <img
          src={avatarImg}
          alt="Prashil Prakash"
          className="relative z-10 w-64 max-w-full object-contain
          transition-transform duration-500 hover:scale-105
          md:w-96"
        />
      </div>
    </section>
  );
}

export default Home;
