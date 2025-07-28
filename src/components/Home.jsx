import { useContext } from "react";
import { ThemeCotext } from "../context/ThemeContextProvider";
import { FaChevronDown } from "react-icons/fa6";

const Home = () => {
  const { theme } = useContext(ThemeCotext);

  return (
    <div className="w-full h-full py-3 pt-[60px] px-7 leght:bg-white dark:bg-gray-800 mt-[60px] flex items-center">
     <div className="flex w-full xl:w-[calc(100vw - 530px)] xl:ml-[230px] xl:mr-[300px] justify-between">
     <div className="flex items-center">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">Overview</h3>
     </div>
     <div className="flex items-center gap-2">
      <h3 className="text-sm text-gray-900 dark:text-gray-200">Today</h3>
      <FaChevronDown size={12} color={theme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"} />
     </div>
     </div>
    </div>
  )
}

export default Home;