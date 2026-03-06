import React from 'react';

const Footer = () => {
  const company = ['About Us', 'Our Mission', 'Contact Sales'];
  const services = ['Products & Services', 'Customer Stories', 'Download Apps'];
  const information = ['Privacy Policy', 'Terms & Conditions', 'Join Us'];

  return (
    <footer className="bg-[#111111] text-white px-8 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-1">
          <h2 className="text-lg font-bold mb-3">CS — Ticket System</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-3">
            {company.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 text-white">Information</h3>
          <ul className="space-y-3">
            {information.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className=' flex flex-col items-center'>
          <h3 className="text-sm font-semibold mb-4 text-white">
            Social Links
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              @CS — Ticket System
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              support@cst.com
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
