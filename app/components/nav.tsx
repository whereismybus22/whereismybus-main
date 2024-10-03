import React from 'react';
import Image from 'next/image'
import busLogo from "../IMAGES/buslogo.png"

const Navbar = () => {
  return (
    <nav className="flex w-full h-[6vh] pr-[5vw] pl-[5vw] justify-between items-center bg-[white] text-black">

      <div className="flex items-center">
        <Image 
          src={busLogo} 
          alt="Logo"
          className="h-[4vh] w-[8vw]"
        />
      </div>

      <div className="flex items-center">
        <span className="text-lg font-semibold">|||</span>
      </div>
    </nav>
  );
};

export default Navbar;
