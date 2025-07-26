import { useContext } from "react";
import { ThemeCotext } from "../context/ThemeContextProvider";

const Notifications = () => {
  const { theme } = useContext(ThemeCotext);

  return (
    <div className={"fixed right-0 top-0 w-[300px] h-screen flex px-7 py-3 light:text-gray-900 dark:text-gray-200 border-0 border-l-[1px] border-solid " + `${theme === "dark" ? "border-l-gray-700" : "border-l-gray-200"}`}>
      <div>
      Notifications
      </div>
    </div>
  )
}

export default Notifications;