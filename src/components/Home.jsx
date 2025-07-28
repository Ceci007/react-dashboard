import { useContext } from "react";
import { ThemeCotext } from "../context/ThemeContextProvider";
import { FaChevronDown, FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

const Home = () => {
  const { theme } = useContext(ThemeCotext);

  return (
    <div className="w-full h-full px-7 py-3 pt-[50px] leght:bg-white dark:bg-gray-800 mt-[60px] flex items-center">
     <div className="flex flex-col w-full xl:w-[calc(100vw - 530px)] xl:ml-[230px] xl:mr-[300px]">
      <div className="flex justify-between">
        <div className="flex items-center">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200">Overview</h3>
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-sm text-gray-900 dark:text-gray-200">Today</h3>
        <FaChevronDown size={12} color={theme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"} />
      </div>
      </div>
      <div className="grid grid-flow-col mt-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full xl:w-[calc(100vw - 530px)]">
       <div className="col-start-1 col-end-2 md:col-start-1 md:col-end-2 xl:col-start-1 xl:col-end-2 bg-[#EDEEFC] p-4 flex flex-col rounded-2xl">
        <h3 className="mb-2 text-sm">Views</h3>
        <div className="flex gap-3">
          <h4 className="text-2xl font-bold">7,265</h4>
          <p className="flex items-center gap-2 text-sm">+11.01% <FaArrowTrendUp size={12} /></p>
        </div>
       </div>
       <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 xl:col-start-2 xl:col-end-3 bg-[#E6F1FD] p-4 flex flex-col rounded-2xl">
        <h3 className="mb-2 text-sm">Visits</h3>
        <div className="flex gap-3">
          <h4 className="text-2xl font-bold">3,671</h4>
          <p className="flex items-center gap-2 text-sm">-0.03% <FaArrowTrendDown size={12} /></p>
        </div>
      </div>
      <div className="col-start-1 col-end-2 md:col-start-1 md:col-end-2 xl:col-start-3 xl:col-end-4 bg-[#EDEEFC] p-4 flex flex-col rounded-2xl">
        <h3 className="mb-2 text-sm">New Users</h3>
        <div className="flex gap-3">
          <h4 className="text-2xl font-bold">156</h4>
          <p className="flex items-center gap-2 text-sm">+15.03% <FaArrowTrendUp size={12} /></p>
        </div>  
      </div>
      <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 xl:col-start-4 xl:col-end-5 bg-[#E6F1FD] p-4 flex flex-col rounded-2xl">
        <h3 className="mb-2 text-sm">Active Users</h3>
        <div className="flex gap-3">
          <h4 className="text-2xl font-bold">2,318</h4>
          <p className="flex items-center gap-2 text-sm">+6.08% <FaArrowTrendUp size={12} /></p>
        </div>
      </div> 
      </div>
     </div>
    </div>
  )
}

export default Home;