import React, { useState } from 'react';

const App = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 300);
    const randomY = Math.floor(Math.random() * 300);
    setNoButtonStyle({
      position: 'absolute',
      left: `${randomX}px`,
      top: `${randomY}px`,
    });
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-pink-100'>
      <h1 className='text-4xl font-bold text-red-500 mb-8'>
        Do you want to go on a date with me?
      </h1>
      <div className='relative mt-4'>
        <button className='mr-4 px-6 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-300'>
          Yes
        </button>
        <button
          style={noButtonStyle}
          className='px-6 py-2 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 transition duration-300'
          onMouseEnter={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
