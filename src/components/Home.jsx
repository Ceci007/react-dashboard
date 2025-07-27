import React, { useContext } from 'react';
import { ThemeCotext } from '../context/ThemeContextProvider';
import { FaMoon, FaRegSun } from "react-icons/fa";

const Home = () => {
  const {theme, toggleTheme} = useContext(ThemeCotext);

  return (
    <div className="w-full h-full leght:bg-white dark:bg-gray-800">
      <p className="ml-[230px]">Home</p>
      <button className='ml-[230px] text-2xl text-dark' onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaRegSun />}
      </button>
    </div>
  )
}

export default Home;