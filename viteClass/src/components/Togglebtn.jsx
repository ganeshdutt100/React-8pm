import React, { useState } from 'react';

export const Togglebtn = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div >
      <textarea
        name=""
        id=""
        style={{ background: darkMode ? '#444' : '#fff', color: darkMode ? '#fff' : '#333' }}
      ></textarea>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
      </button>
    </div>
  );
};
