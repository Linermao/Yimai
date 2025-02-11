import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

function Navbar() {
    const location = useLocation(); // 获取当前 URL
    const menuItems = [
      { name: "首页", path: "/" },
      { name: "民族", path: "/Nationality" },
      { name: "对外", path: "/Foreign" },
      { name: "青少年", path: "/Teenager" },
      { name: "资讯", path: "/Information" },
      { name: "文创", path: "/Product" },
    ];
  
    return (
      <nav className="flex items-center justify-evenly bg-white px-8 py-4 shadow-md">
        {/* 左侧 Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-10" />
        </div>
  
        {/* 中间导航菜单 */}
        <div className="flex space-x-8 text-lg font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`${
                location.pathname === item.path ? "text-black font-bold" : "text-gray-500"
              } hover:text-blue-500 transition font-bold`}
            >
              {item.name}
            </Link>
          ))}
        </div>
  
        {/* 右侧搜索框 */}
        <SearchBar />
      </nav>
    );
  }
  
  export default Navbar;