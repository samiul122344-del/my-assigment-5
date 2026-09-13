import React from 'react';

const TechnologyCard = ({ tech, onAddToStack, isAdded }) => {
  return (
    <div className="bg-[#fafafa] border border-gray-100/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 border border-cyan-100">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-[11px] text-gray-400 mb-4 pt-4 border-t border-gray-100">
          <span>{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="font-semibold text-amber-500 flex items-center gap-1">
            ★ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-3 rounded-xl font-semibold text-xs transition ${
            isAdded
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#0f172a] hover:bg-black text-white shadow-sm'
          }`}
        >
          {isAdded ? 'Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;