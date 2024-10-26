const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
      <a href="/">
          <div className="relative playwrite inline-block ">
            <span class="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50 rounded-full w-40  animate-pulse blur-3xl"></span>
            <span className="text-2xl md:text-3xl font-medium text-gray-800 ">
              Sufi
            </span>
            <span className="absolute right-50 top-2 text-2xl md:text-3xl text-gray-600">
              Prog
            </span>
          </div>
      </a>
      <div className="w-max flex items-center mt-3 gap-2 mx-auto">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../mail_icon.png" className="w-6" alt="" />
        sufidemo@gmail.com
      </div>
      </div>
      <hr className="mt-3"  />
      <div className="text-center my-5 text-gray-500">
        <p>Copyright &copy; 2024 SufyanCode.me - All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
