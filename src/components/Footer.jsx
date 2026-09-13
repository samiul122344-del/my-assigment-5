import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 mt-32">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-10 text-xs">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#d946ef] flex items-center justify-center text-white font-bold text-[10px]">
              DS
            </div>
            <span className="text-lg font-bold text-gray-900">Dev Stack</span>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-gray-400 font-medium pt-2">
            <a href="#" className="hover:text-gray-900">GitHub</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4 tracking-wider uppercase text-[11px]">PRODUCT</h4>
          <ul className="space-y-3 text-gray-500 font-medium">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
            <li><a href="#" className="hover:text-gray-900">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4 tracking-wider uppercase text-[11px]">COMPANY</h4>
          <ul className="space-y-3 text-gray-500 font-medium">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4 tracking-wider uppercase text-[11px]">LEGAL</h4>
          <ul className="space-y-3 text-gray-500 font-medium">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-[11px]">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-gray-600">Privacy</a>
          <a href="#" className="hover:text-gray-600">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;