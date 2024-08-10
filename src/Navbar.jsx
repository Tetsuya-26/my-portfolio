import React from 'react';

const Navbar = () => {
  return (
    <nav className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1><a className="text-black text-2xl font-bold">Logo</a></h1>
        <div className="space-x-4">
          <a href="#" className="text-black hover:text-gray-300">Home</a>
          <a href="#" className="text-black hover:text-gray-300">About</a>
          <a href="#" className="text-black hover:text-gray-300">Services</a>
          <a href="#" className="text-black hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;