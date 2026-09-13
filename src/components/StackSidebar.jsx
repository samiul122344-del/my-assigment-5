import React from 'react';

const StackSidebar = ({ stack, onRemoveFromStack, onClearAll }) => {
  return (
    <aside className="bg-[#fafafa] border border-gray-100/80 rounded-2xl p-6 sticky top-28 shadow-xs">
      <div className="mb-4">
        <h2 className="text-sm font-bold text-gray-900">Your Stack</h2>
        <p className="text-[11px] text-gray-400 font-medium">
          {stack.length} Technology Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10 text-gray-400 text-xs">
          No items added to stack yet.
        </div>
      ) : (
        <div className="space-y-2 mb-6 max-h-[300px] overflow-y-auto pr-1">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                <span className="text-xs font-semibold text-gray-800">{item.name}</span>
              </div>
              <button
                onClick={() => onRemoveFromStack(item.id)}
                className="text-gray-300 hover:text-red-500 text-xs font-bold px-1"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <div className="pt-2 border-t border-gray-100 flex justify-center">
          <button
            onClick={onClearAll}
            className="text-xs text-[#ec4899] hover:text-[#db2777] font-semibold"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default StackSidebar;