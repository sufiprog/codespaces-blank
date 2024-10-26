import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const HireMe = () => {
  return (
    <div className="px-[5%] md:px-[12%] h-screen mt-24 relative flex items-center justify-center">
      <div className=" rounded-3xl  p-8 md:p-12 max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6">Let's Collaborate!</h2>
        <h3 className="text-2xl text-gray-700 mb-4">Hire Me for Your Next Project</h3>
        
        <div className="flex flex-col md:flex-row my-10 items-center justify-center">
          <img className="w-64 sm:max-w-lg md:max-w-xl rounded-3xl max-w-none" src="../sufi.webp" alt="Profile" />
          
        </div>

        <div className="my-8">
          <a
            href="https://github.com/sufiprog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-10 mb-5 justify-center bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
          >
            <FaGithub className="mr-2" /> GitHub Profile
          </a>
          <a
        href="https://wa.me/+923162802682" // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer"
      >
        <IoLogoWhatsapp className="mr-2 text-white" /> Chat on WhatsApp
      </a>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-800">Additional Information</h4>
          <p className="text-gray-600">
            I'm passionate about building responsive and user-friendly applications. Let's bring your ideas to life together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
