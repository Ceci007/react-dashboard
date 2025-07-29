import { useContext } from "react";
import { ThemeCotext } from "../context/ThemeContextProvider";
import userPicture from "../assets/team/user-2.jpg";
import { GoDotFill } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet, MdCorporateFare } from "react-icons/md";
import { FaChartPie, FaRegFolderClosed, FaChevronRight } from "react-icons/fa6";
import { IoBagHandleOutline } from "react-icons/io5";
import { TfiAgenda } from "react-icons/tfi";
import { LuMessagesSquare } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import sidebarLogo from "../assets/sidebar-logo.png"; 

const Sidebar = () => {
	const { theme } = useContext(ThemeCotext);

  return (
			<aside style={{ zIndex: 60 }} className={"fixed hidden xl:block px-7 py-3 top-0 left-0 w-[230px] h-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-0 border-r-[1px] border-solid " + `${theme === "dark" ? "border-r-gray-700" : "border-r-gray-200"}` }>
      <div className="flex items-center gap-2">
        <img src={userPicture} alt="user" className="w-[34px] h-[34px] rounded-full" />
        <h3 className="text-sm text-gray-900 dark:text-gray-200">ByeWind</h3>
      </div>
      <div className="flex justify-between w-[160px] mx-auto py-5">
        <h2 className="text-sm font-medium text-black/60 dark:text-gray-200/60">Favorites</h2>
        <h2 className="text-sm font-medium text-black/30 dark:text-gray-200/30">Recently</h2>
      </div>
      <nav>
        <ul>
          <li>
          <Link to="/" className="flex items-center gap-2">
            <GoDotFill size={12} color={theme === "light" ? "rgba(0, 0, 0, 0.16)" : "rgba(255, 255, 255, 0.16)"} />
            <h2 className="text-sm">Overview</h2>
          </Link>
          </li>
          <li>
          <Link to="/about" className="flex items-center gap-2 py-3">
            <GoDotFill size={12} color={theme === "light" ? "rgba(0, 0, 0, 0.16)" : "rgba(255, 255, 255, 0.16)"} />
            <h2 className="text-sm">Projects</h2>
          </Link>
          </li>
        </ul>
      </nav>
      <nav className="mt-4">
        <h2 className="text-sm text-black/60 dark:text-gray-200/60 font-medium mb-[6px]">Dashboard</h2>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive  ? `${theme === "light" ? "bg-gray-200" : "bg-gray-700"}` + " flex gap-2 py-2 px-4 rounded-xl items-center" : "flex gap-2 py-2 px-4 rounded-xl items-center")}
            >
              {({ isActive }) => (
                <>
                  {isActive ? <FaChevronRight size={10} color="rgba(0, 0, 0, 0)" /> : <FaChevronRight size={10} color={theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"} />}
                  <FaChartPie size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
                  <h3 className="text-sm light:text-gray-900 dark:text-gray-200">Overview</h3>
                </>
              )}
              
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/some-path-1" 
							className={({ isActive }) => (isActive  ? `${theme === "light" ? "bg-gray-200" : "bg-gray-700"}` + " flex gap-2 py-2 px-4 rounded-xl items-center" : "flex gap-2 py-2 px-4 rounded-xl items-center")}
            >
               {({ isActive }) => (
                <>
                  {isActive ? <FaChevronRight size={10} color="rgba(0, 0, 0, 0)" /> : <FaChevronRight size={10} color={theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"} />}
                  <IoBagHandleOutline size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
                  <h3 className="text-sm text-gray-900 dark:text-gray-200">Ecomerce</h3>
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/some-path-2"   
							className={({ isActive }) => (isActive  ? `${theme === "light" ? "bg-gray-200" : "bg-gray-700"}` + " flex gap-2 py-2 px-4 rounded-xl items-center" : "flex gap-2 py-2 px-4 rounded-xl items-center")}
            >
              {({ isActive }) => (
                <>
                  {isActive ? <FaChevronRight size={10} color="rgba(0, 0, 0, 0)" /> : <FaChevronRight size={10} color={theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"} />}
                  <FaRegFolderClosed size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
                  <h3 className="text-sm text-gray-900 dark:text-gray-200">Projects</h3>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="mt-4">
        <h2 className="text-sm text-black/60 dark:text-gray-200/60 font-medium mb-[6px]">Pages</h2>
        <ul>
          <li>
            <NavLink 
                to="/some-path-3" 
								className={({ isActive }) => (isActive  ? `${theme === "light" ? "bg-gray-200" : "bg-gray-700"}` + " flex gap-2 py-2 px-4 rounded-xl items-center" : "flex gap-2 py-2 px-4 rounded-xl items-center")}
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <FaChevronRight size={10} color="rgba(0, 0, 0, 0)" /> : <FaChevronRight size={10} color={theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"} />}
                    <FaRegUser size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
                    <h3 className="text-sm text-gray-900 dark:text-gray-200">User Profile</h3>
                  </>
                )}
                
              </NavLink>
          </li>
          <nav>
            <ul>
              <li className="px-4 py-2 ml-4 text-sm text-gray-900 dark:text-gray-200 pl-11">Overview</li>
              <li className="px-4 py-2 ml-4 text-sm text-gray-900 dark:text-gray-200 pl-11">Projects</li>
              <li className="px-4 py-2 ml-4 text-sm text-gray-900 dark:text-gray-200 pl-11">Campaigns</li>
              <li className="px-4 py-2 ml-4 text-sm text-gray-900 dark:text-gray-200 pl-11">Documents</li>
              <li className="px-4 py-2 ml-4 text-sm text-gray-900 dark:text-gray-200 pl-11">Followers</li>
            </ul>
          </nav>
          <li>
            <NavLink 
                to="/some-path-4" 
								className={({ isActive }) => (isActive  ? `${theme === "light" ? "bg-gray-200" : "bg-gray-700"}` + " flex gap-2 py-2 px-4 rounded-xl items-center" : "flex gap-2 py-2 px-4 rounded-xl items-center")}
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <FaChevronRight size={10} color="rgba(0, 0, 0, 0)" /> : <FaChevronRight size={10} color={theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"} />}
                    <MdOutlineAccountBalanceWallet size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
                    <h3 className="text-smtext-gray-900 dark:text-gray-200">Account</h3>
                  </>
                )}
                
              </NavLink>
          </li>
          <li>
            <NavLink 
                to="/some-path-5" 
								className={({ isActive }) => (isActive  ? `${theme === "light" ? "bg-gray-200" : "bg-gray-700"}` + " flex gap-2 py-2 px-4 rounded-xl items-center" : "flex gap-2 py-2 px-4 rounded-xl items-center")}
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <FaChevronRight size={10} color="rgba(0, 0, 0, 0)" /> : <FaChevronRight size={10} color={theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"} />}
                    <MdCorporateFare size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
                    <h3 className="text-sm text-gray-900 dark:text-gray-200">Corporate</h3>
                  </>
                )}
                
              </NavLink>
          </li>
          <li>
            <NavLink 
                to="/some-path-6" 
								className={({ isActive }) => (isActive  ? `${theme === "light" ? "bg-gray-200" : "bg-gray-700"}` + " flex gap-2 py-2 px-4 rounded-xl items-center" : "flex gap-2 py-2 px-4 rounded-xl items-center")}
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <FaChevronRight size={10} color="rgba(0, 0, 0, 0)" /> : <FaChevronRight size={10} color={theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"} />}
                    <TfiAgenda size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
                    <h3 className="text-sm text-gray-900 dark:text-gray-200">Blog</h3>
                  </>
                )}
                
              </NavLink>
          </li>
          <li>
            <NavLink 
                to="/some-path-7" 
								className={({ isActive }) => (isActive  ? `${theme === "light" ? "bg-gray-200" : "bg-gray-700"}` + " flex gap-2 py-2 px-4 rounded-xl items-center" : "flex gap-2 py-2 px-4 rounded-xl items-center")}
              >
                {({ isActive }) => (
                  <>
                    {isActive ? <FaChevronRight size={10} color="rgba(0, 0, 0, 0)" /> : <FaChevronRight size={10} color={theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"} />}
                    <LuMessagesSquare size={20} color={theme === "light" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"} />
                    <h3 className="text-sm text-gray-900 dark:text-gray-200">Social</h3>
                  </>
                )}
                
              </NavLink>
          </li>
        </ul>
      </nav>
      <footer className="absolute bottom-0 left-0 flex items-center justify-center w-full py-2 mt-4 px-7">
        <div className="w-[74px] h-[20px]">
          <img src={sidebarLogo} alt="Snow UI logo" className="w-full h-full cover" />
        </div>
      </footer>
    </aside>
  )
}

export default Sidebar;