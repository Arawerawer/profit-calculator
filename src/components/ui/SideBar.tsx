import DragonSVG from "../svg/Dragon";
import DashboardSVG from "../svg/Dashboard";
import ProfitSVG from "../svg/Profit";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-1/5 py-4 pl-4 hidden lg:block">
      <div className="h-full bg-white dark:bg-gray-700 rounded-2xl shadow-lg">
        <div className="flex items-center justify-center pt-6">
          <DragonSVG
            className="w-10 h-10 text-white hover:text-black
                       transition-colors duration-200 ease-in-out"
            fill="currentColor"
          />
        </div>

        <nav className="mt-12">
          <div>
            {/* 標籤 */}
            <Link
              className="w-full flex items-center p-4 my-2 
                        hover:bg-linear-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800
                        hover:text-blue-500 text-gray-500 dark:text-gray-200  font-thin  
                        transition-colors duration-200
                        hover:border-r-4 border-blue-500 
                        "
              to="/"
            >
              <span className="text-left">
                <DashboardSVG className="w-10 h-10" />
              </span>

              <span className="mx-auto text-2xl font-normal">控制台</span>
            </Link>
            {/* 標籤 */}
            <Link
              className="w-full flex items-center p-4 my-2 
                        hover:bg-linear-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800
                        hover:text-blue-500 text-gray-500 dark:text-gray-200  font-thin  
                        transition-colors duration-200 
                        hover:border-r-4 border-blue-500"
              to="/profit"
            >
              <span className="text-left">
                <ProfitSVG
                  className="w-10 h-10 text-yellow-500"
                  fill="currentColor"
                />
              </span>

              <span className="mx-auto text-2xl font-normal">利潤試算</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
