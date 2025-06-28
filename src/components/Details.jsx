'use client';

import React from 'react';

const Details = ({ show, onHide, projectTitle, projectSubtitle, projectDescription, projectSkills }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-[90%] max-w-2xl shadow-xl relative">

        {/* Close Button */}
        <button
          onClick={onHide}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">{projectTitle}</h2>
        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">{projectSubtitle}</h4>
        <p className="text-gray-700 dark:text-gray-300 mb-3">{projectDescription}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{projectSkills}</p>

        {/* Close Footer Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onHide}
            className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
