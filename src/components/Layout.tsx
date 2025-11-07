import SideBar from "./ui/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen flex">
      <SideBar />
      <Outlet />
    </main>
  );
};

export default Layout;
