import { useContext } from "react";
import { ThemeCotext } from "../context/ThemeContextProvider";
import { IoBugOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";

const Notifications = () => {
  const { theme } = useContext(ThemeCotext);

  return (
    <div className={"fixed right-0 top-0 w-[300px] h-screen flex px-7 py-3 text-gray-900 dark:text-gray-200 border-0 border-l-[1px] border-solid " + `${theme === "dark" ? "border-l-gray-700" : "border-l-gray-200"}`}>
      <div>
        <h3 className="text-sm text-gray-900 dark:text-gray-200">Notifications</h3>
        <ul className="mt-6">
          <li className="flex items-center gap-2 py-2">
            <div className="h-6 w-6 rounded-full bg-[#EDEEFC] flex items-center justify-center">
            <IoBugOutline size={16} color="rgba(0, 0, 0, 0.8)" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-900 dark:text-gray-200">You fixed a bug</h5>
              <p className="text-[12px] text-gray-400 dark:text-gray-400">Just now</p>
            </div>  
          </li>
          <li className="flex items-center gap-2 py-2">
            <div className="h-6 w-6 rounded-full bg-[#E6F1FD] flex items-center justify-center">
            <FaRegUser size={14} color="rgba(0, 0, 0, 0.8)" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-900 dark:text-gray-200">New user registered</h5>
              <p className="text-[12px] text-gray-400 dark:text-gray-400">59 minutes ago</p>
            </div>  
          </li>
          <li className="flex items-center gap-2 py-2">
            <div className="h-6 w-6 rounded-full bg-[#EDEEFC] flex items-center justify-center">
            <IoBugOutline size={16} color="rgba(0, 0, 0, 0.8)" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-900 dark:text-gray-200">You fixed a bug</h5>
              <p className="text-[12px] text-gray-400 dark:text-gray-400">12 hours ago</p>
            </div>  
          </li>
          <li className="flex items-center gap-2 py-2">
            <div className="h-6 w-6 rounded-full bg-[#E6F1FD] flex items-center justify-center">
            <MdCastForEducation size={14} color="rgba(0, 0, 0, 0.8)" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-900 dark:text-gray-200">Andi Lane subcribed to you</h5>
              <p className="text-[12px] text-gray-400 dark:text-gray-400">Today, 11:59 AM</p>
            </div>  
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Notifications;