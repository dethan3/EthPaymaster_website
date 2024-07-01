'use client';

import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsopen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState<{ [key: string]: boolean}>({})

    const toggleNavbar = () => {
        setIsopen(!isOpen);
    };

    const toggleSubMenu = (key: string) => {
        setSubMenuOpen(prevState => ({
          ...prevState,
          [key]: !prevState[key]
        }));
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
          <div>
            <img src="/logo-aastar.png" alt="AAStar Logo" className="h-8 w-8 object-cover mr-2"/>
            <span className="text-xl font-bold">ETHPaymaster</span>
          </div>

          <div className="block lg:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outlint-none">
              ☰
            </button>
          </div>

          <div className={`flex-col lg:flex-row lg:flex ${isOpen ?'flex':'hidden'} lg:space-x-4 lg:ml-auto`}>
            {['Learn', 'Developers', 'Solutions', 'Node', 'Community'].map(item => (
              <div key={item} className="relative group">
                <a href="{`#${item.toLowerCase()}`}" className="hover:underline flex items-center" onClick={() => toggleSubMenu(item)}>
                  {item}
                  <span className="ml-1">{subMenuOpen[item] ? '▲' : '▼'}</span>
                </a>
              {subMenuOpen[item] && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Submenu Item 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Submenu Item 2</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Submenu Item 3</a>
                </div>
              )}
              </div>
            ))} 
          </div>
        </nav>
    )
};

export default Navbar;