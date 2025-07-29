import { useContext } from "react";
import { ThemeCotext } from "../context/ThemeContextProvider";
import { TfiAgenda } from "react-icons/tfi";
import { IoSearch } from "react-icons/io5";
import { FaRegStar, FaRegSun, FaMoon, FaRegBell } from "react-icons/fa";
import { SlReload } from "react-icons/sl";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeCotext);

  return (
    <div style={{ zIndex: 40 }} className={"fixed top-0 w-full xl:w-[calc(100vw - 530px)] h-[60px] flex items-center justify-between bg-white dark:bg-gray-800 border-0 border-b-[1px] border-solid " + `${theme === "dark" ? "border-b-gray-700" : "border-b-gray-200"}`}>
      <div className="xl:ml-[230px] flex items-center w-full h-full py-3 px-7 gap-7">
        <TfiAgenda size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
        <FaRegStar size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)"} />
        <h3 className="text-sm font-medium text-black/60 dark:text-gray-200/60">Dashboards</h3>
        <h3 className="text-sm text-gray-900 dark:text-gray-200">Default</h3>
      </div>
      <div className="xl:mr-[300px] py-3 px-7 flex items-center justify-end gap-7 h-full w-full">
        <div className="relative">
          <input type="text" placeholder="Search" className="bg-gray-200 dark:bg-gray-700 h-[40px] w-[200px] flex items-center py-2 px-3 pl-9 border-none focus:outline-none text-gray-900 dark:text-gray-200 placeholder:text-gray-400 rounded-3xl" />
          <IoSearch className="absolute top-[50%] -translate-y-[50%] left-3" size={20} color="#99a1af" />
        </div>
        <div className="flex items-center gap-7">
          <button className="relative bg-transparent border-none cursor-pointer z-60">
          {theme === "light" ? <FaMoon size={20} color="rgba(0, 0, 0, 0.9)" onClick={toggleTheme}  /> : <FaRegSun size={20} color="rgba(255, 255, 255, 0.9)" onClick={toggleTheme}  />}
          </button>
          <SlReload size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
          <FaRegBell size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
          <TfiAgenda size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;