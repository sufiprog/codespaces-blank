import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import {IoMdContact} from 'react-icons/io'
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Link } from "react-router-dom";

const Hero = () => {
  
  return (
    <div className="relative  pb-15 pt-16 md:pt-20 poppins max-h-screen">
      <div
        className="h-full my-20 w-full  bg-transparent  bg-grid-black/[0.05]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <img
            className="w-32 md:w-40 rounded-full shadow-md mb-5"
            src="../sufi-picture.webp"
            alt=""
          />
          <div className="flex items-center gap-1">
          <img src="../hand-icon.png" className="w-5 md:w-6 object-cover" alt="" />
          <p className="uppercase tracking-widest text-xs text-center text-gray-500 max-w-80">
            Welcome to sufiprog portfolio
          </p>
          </div>

          <TextGenerateEffect
            words="Transforming Design into Seamless User Experiences"
            className="text-center  text-xl md:text-5xl lg:text-6xl"
          />

          <p className="flex gap-2.5 text-center md:font-light  text-sm md:text-lg lg:text-2xl my-5 md:mb-10">
            Hi! I&apos;m M.Sufyan, a React.js Developer based in
            Karachi, Pakistan.
          </p>

          <div className="flex items-center flex-col md:flex-row gap-3">
          <a href="https://drive.google.com/uc?export=download&id=116Z8pVMVOPWK9bm6u3MxOVFLMMwis8rC" download="sufyan-resume.pdf" className="playwrite flex gap-1 text-sm   px-4 py-2 md:px-5 md:py-4 bg-purple-200 rounded-full hover:bg-purple-600 border hover:text-white items-center">Download My Resume{<FaLocationArrow className="animate-bounce" />}</a>
          <Link className="playwrite flex gap-1 text-sm   px-4 py-2 md:px-5 md:py-4 bg-gray-300 rounded-full hover:bg-gray-600 border hover:text-white items-center" to='#'>Contac me{<IoMdContact className="w-6" />}</Link>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Hero;
