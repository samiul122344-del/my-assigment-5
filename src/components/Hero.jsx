import React from 'react';
import bannerImg from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
          Build Your Ideal <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#8b5cf6]">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <a
            href="#technologies"
            className="bg-[#ec4899] hover:bg-[#db2777] text-white px-6 py-3 rounded-xl font-semibold text-sm transition shadow-sm"
          >
            Explore Technologies
          </a>
          <button className="bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src={bannerImg}
          alt="Dev Stack Visual"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;