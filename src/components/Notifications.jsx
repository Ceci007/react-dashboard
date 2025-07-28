import { useContext } from "react";
import { ThemeCotext } from "../context/ThemeContextProvider";
import { IoBugOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import user1 from "../assets/team/user-1.jpg";
import user2 from "../assets/team/user-3.jpg";
import user3 from "../assets/team/user-4.jpg";
import user4 from "../assets/team/user-5.jpg";
import user5 from "../assets/team/user-6.jpg";
import user6 from "../assets/team/user-7.jpg";
import user7 from "../assets/team/user-8.jpg";

const Notifications = () => {
  const { theme } = useContext(ThemeCotext);

  return (
    <aside className={"fixed z-60 overflow-y-auto max-h-screen h-auto right-0 top-0 w-[300px] hidden xl:flex xl:flex-col px-7 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 border-0 border-l-[1px] border-solid " + `${theme === "dark" ? "border-l-gray-700" : "border-l-gray-200"}`}>
      <div>
        <h3 className="text-sm text-gray-900 dark:text-gray-200">Notifications</h3>
        <ul className="mt-2">
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
      <div className="mt-6">
        <h3 className="text-sm text-gray-900 dark:text-gray-200">Activities</h3>
        <ul className="mt-2">
          <li className="flex gap-2 py-4">
            <div className="relative">
              <img src={user1} alt="Ben Cobalt" className="rounded-full size-8" />
              <span className="absolute left-4 top-[110%] h-[15px] w-[1px] bg-gray-300 dark:bg-gray-600" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-900 dark:text-gray-200">Changed the style</h5>
              <p className="text-[12px] text-gray-400 dark:text-gray-400">Just now</p>
            </div>
          </li> 

          <li className="flex gap-2 py-4">
            <div className="relative">
              <img src={user2} alt="Jenny Wyan" className="rounded-full size-8" />
              <span className="absolute left-4 top-[110%] h-[15px] w-[1px] bg-gray-300 dark:bg-gray-600" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-900 dark:text-gray-200">Released a new version</h5>
              <p className="text-[12px] text-gray-400 dark:text-gray-400">59 minutes ago</p>
            </div>
          </li> 

          <li className="flex gap-2 py-4">
            <div className="relative">
              <img src={user3} alt="Soraya Montenegro" className="rounded-full size-8" />
              <span className="absolute left-4 top-[110%] h-[15px] w-[1px] bg-gray-300 dark:bg-gray-600" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-900 dark:text-gray-200">Submitted a bug</h5>
              <p className="text-[12px] text-gray-400 dark:text-gray-400">12 hours ago</p>
            </div>
          </li> 

          <li className="flex gap-2 py-4">
            <div className="relative">
              <img src={user4} alt="Laura Decourt" className="rounded-full size-8" />
              <span className="absolute left-4 top-[110%] h-[15px] w-[1px] bg-gray-300 dark:bg-gray-600" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-900 dark:text-gray-200">Modified A data in Page X</h5>
              <p className="text-[12px] text-gray-400 dark:text-gray-400">Today, 11:59 AM</p>
            </div>
          </li> 

          <li className="flex gap-2 py-4">
            <div className="relative">
              <img src={user5} alt="Frank Francis" className="rounded-full size-8" />
            </div>
            <div className="flex flex-col">
              <h5 className="text-sm text-gray-900 dark:text-gray-200">Deleted a page in Project X</h5>
              <p className="text-[12px] text-gray-400 dark:text-gray-400">Feb 2, 2025</p>
            </div>
          </li> 
        </ul>
      </div> 
      <div className="mt-6">
        <h3 className="text-sm text-gray-900 dark:text-gray-200">Contacts</h3>
        <ul className="mt-2">
          <li className="flex gap-2 py-2">
            <img src={user2} alt="Natali Craig" className="rounded-full size-8" />
            <h3 className="text-sm text-gray-900 dark:text-gray-200">Natali Craig</h3>
          </li>

          <li className="flex gap-2 py-2">
            <img src={user6} alt="Drew Cano" className="rounded-full size-8" />
            <h3 className="text-sm text-gray-900 dark:text-gray-200">Drew Cano</h3>
          </li>

          <li className="flex gap-2 py-2">
            <img src={user7} alt="Andi Lane" className="rounded-full size-8" />
            <h3 className="text-sm text-gray-900 dark:text-gray-200">Andi Lane</h3>
          </li>

          <li className="flex gap-2 py-2">
            <img src={user1} alt="Koray Okumus" className="rounded-full size-8" />
            <h3 className="text-sm text-gray-900 dark:text-gray-200">Koray Okumus</h3>
          </li>

          <li className="flex gap-2 py-2">
            <img src={user3} alt="Kate Morrison" className="rounded-full size-8" />
            <h3 className="text-sm text-gray-900 dark:text-gray-200">Kate Morrison</h3>
          </li>

          <li className="flex gap-2 py-2">
            <img src={user4} alt="Melody Macy" className="rounded-full size-8" />
            <h3 className="text-sm text-gray-900 dark:text-gray-200">Melody Macy</h3>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Notifications;