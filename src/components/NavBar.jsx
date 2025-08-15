import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-primary flex justify-between items-center px-[20px] py-[16px] md:px-[40px] md:py-[26px] lg:px-[80px] lg:py-[26px]">
      <img className="w-[100px] sm:w-[152px] md:w-[226px] cursor-pointer" src="../src/assets/Logo.png" alt="logo" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-accent gap-[25px] text-[14px]">
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT US</a></li>
        <li><a href="#">CAREERS</a></li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 
            <FiX className="text-accent w-[31px] h-[24px]" /> : 
            <FiMenu className="text-accent w-[31px] h-[24px]" />
          }
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="absolute bg-accent top-[100%] left-0 w-full flex flex-col items-center gap-[32px] text-[14px] py-4 md:hidden z-50">
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT US</a></li>
          <li><a href="#">CAREERS</a></li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
