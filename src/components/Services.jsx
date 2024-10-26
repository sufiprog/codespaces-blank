const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
       <h4 className="text-center mb-2 text-lg">What i offer</h4>
      <h2 className="text-center text-4xl">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">I provide top-notch services focused on quality, efficiency, and clean code, bringing your ideas to life with seamless user experiences.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6  my-10">
        <div className="border hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 border-gray-400 rounded-lg px-8 py-12">
            <img src="../web-icon.png" className="w-10" alt="" />
            <h3 className="text-lg my-4 text-gray-700">Web design</h3>
            <p className="text-sm text-gray-600 leading-5">I create websites tailored to your needs. I also convert Figma designs into HTML seamlessly.</p>
            <p className="flex items-center gap-2 text-sm mt-5">Read more <img src="../right-arrow.png" className="w-4" alt="" /></p>
        </div>
        <div className="border hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 border-gray-400 rounded-lg px-8 py-12">
            <img src="../ui-icon.png" className="w-10" alt="" />
            <h3 className="text-lg my-4 text-gray-700">MERN App</h3>
            <p className="text-sm text-gray-600 leading-5"> I build robust web applications using the MERN stack. From front-end to back-end, I ensure seamless functionality and user experience.</p>
            <p className="flex items-center gap-2 text-sm mt-5">Read more <img src="../right-arrow.png" className="w-4" alt="" /></p>
        </div>
        <div className="border hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 border-gray-400 rounded-lg px-8 py-12">
            <img src="../graphics-icon.png" className="w-10" alt="" />
            <h3 className="text-lg my-4 text-gray-700">GSAP Projects</h3>
            <p className="text-sm text-gray-600 leading-5"> I create engaging animations and smooth transitions using GSAP. Enhance your website's interactivity and user experience with dynamic visual effects.</p>
            <p className="flex items-center gap-2 text-sm mt-5">Read more <img src="../right-arrow.png" className="w-4" alt="" /></p>
        </div>
        <div className="border hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 border-gray-400 rounded-lg px-8 py-12">
            <img src="../web-icon.png" className="w-10" alt="" />
            <h3 className="text-lg my-4 text-gray-700">CMS Management</h3>
            <p className="text-sm text-gray-600 leading-5"> I develop and manage custom content management systems tailored to your needs. Streamline your content creation and organization effortlessly.</p>
            <p className="flex items-center gap-2 text-sm mt-5">Read more <img src="../right-arrow.png" className="w-4" alt="" /></p>
        </div>
      </div>
      
    </div>
  )
}
export default Services