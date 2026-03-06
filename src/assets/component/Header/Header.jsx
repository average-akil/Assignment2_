import React from 'react';

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-8">
        <h1 className="text-xl text-black font-bold">CS — Ticket System</h1>
      </div>
      <div className=" md:flex items-center gap-6 text-sm text-gray-600">
        <div className="hidden sm:flex md:flex gap-6">
          <a>Home</a>
          <a>FAQ</a>
          <a>Changelog</a>
          <a>Blog</a>
          <a>Download</a>
          <a>Contact</a>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm font-medium rounded-lg transition-colors">
          <span>+</span>
          <span>New Ticket</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
