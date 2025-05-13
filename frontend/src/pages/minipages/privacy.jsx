import React from 'react';

export const Privacy = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Privacy Policy & Disclaimer</h1>
        <p className="text-lg text-gray-700 mb-4">
          Hey there! Just so you know, all the data we use comes from publicly available sources. We’re not affiliated with any universities or consultants—promise! 🙅‍♂️💼
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Disclaimer: If you're hoping for a magic formula to get into a university, it doesn’t exist (trust us, we’ve tried). We’re not responsible for any dreams dashed by unrealistic promises or magical consultants. 😉
        </p>
        <p className="text-lg text-gray-700 mb-6">
          So, just a heads-up: Read the fine Application print, use your own judgment, and remember—you’re the one in control of your application! 🎓
        </p>
      </div>
    </div>
  );
};

export default Privacy;
