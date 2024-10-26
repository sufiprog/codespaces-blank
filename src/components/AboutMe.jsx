import React from "react";
const AboutMe = () => {
  return (
    <div id="about" className="scroll-mt-20 relative w-full px-[12%] py-10 ">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-4xl">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            className="w-64 sm:w-80 rounded-3xl max-w-none"
            src="../sufi.webp"
            alt=""
          />
          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
          <img src="../circular-text.png" className="w-full animate-spin duration-100" alt="" />
          <img src="../dev-icon.png" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
          </div>
        </div>
      
      <div className="flex-1">
        <p className="mb-10 max-w-2xl">
        I&apos;m an experienced Frontend Developer with three years in the field, currently mastering MERN. Studying DAE in Software Engineering at Aligarh Institute of Technology, I&apos;ve collaborated with prestigious organizations to drive their success and growth.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer">
                <img src="../code-icon.png" className="w-7 mt-3" alt="" />
                <h3 className="my-4 font-semibold text-gray-70">Languages</h3>
                <p className="text-gray-600 text-sm">HTML, CSS, JavaScript React Js, Next Js <span className="text-gray-500/60">(preparing)</span></p>
            </li>
            <li className="hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer">
                <img src="../edu-icon.png" className="w-7 mt-3" alt="" />
                <h3 className="my-4 font-semibold text-gray-70">Education</h3>
                <p className="text-gray-600 text-sm">Diploma of Associate Engineer (DAE) in Software Technology</p>
            </li>
            <li className="hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer">
                <img src="../project-icon.png" className="w-7 mt-3" alt="" />
                <h3 className="my-4 font-semibold text-gray-70">Projects</h3>
                <p className="text-gray-600 text-sm">Built more than 30 UI/UX Projets & 5 MERN Projects</p>
            </li>
        </ul>
        <h4 className="my-6 text-gray-700">Tools i use</h4>
        <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1">
                <img src="../firebase.png" className="w-5 sm:w-7" alt="" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1">
                <img src="../mongodb.png" className="w-5 sm:w-7" alt="" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1">
                <img src="../figma.png" className="w-5 sm:w-7" alt="" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1">
                <img src="../git.png" className="w-5 sm:w-7" alt="" />
            </li>

        </ul>
      </div>
    </div>
    </div>
  );
};
export default AboutMe;
