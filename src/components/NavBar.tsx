import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { BiCog } from "react-icons/bi";
import { motion } from "framer-motion";

const MenuItem = (props: {
  id: number;
  href: string;
  label: string;
  isCurrent: boolean;
  icon: ReactNode;
  selectedMenuIdCallBack: (id: number) => any;
}) => {
  return (
    <Link
      to={props.href}
      className={`flex items-center pl-3 py-3 pr-4 text-gray-50  rounded`}
      onClick={() => {
        props.selectedMenuIdCallBack(props.id);
        console.log(props.id);
      }}
    >
      <span className="inline-block mr-3">{props.icon}</span>
      <span>{props.label}</span>
    </Link>
  );
};

export const NavBar = (props: {
  selectedMenuId: number;
  lastSelectedMenuId: number;
  selectedMenuIdCallBack: (id: number) => any;
}) => {
  const menuList = [
    {
      id: 0,
      href: "/",
      label: "Dashboard",
      isCurrent: true,
      icon: <RiDashboardLine />,
    },
    {
      id: 1,
      href: "/data",
      label: "Data",
      isCurrent: false,
      icon: <FiDatabase />,
    },
    {
      id: 2,
      href: "/users",
      label: "Users",
      isCurrent: false,
      icon: <TbUsers />,
    },
    {
      id: 3,
      href: "/  ",
      label: "Admin",
      isCurrent: false,
      icon: <BiCog />,
    },
  ];

  const topMenuDist = 5 + 44 * props.selectedMenuId;
  const lastTopMenuDist = 5 + 44 * props.lastSelectedMenuId;

  return (
    <div id="navbar">
      <div className=" z-50">
        <nav className="min-h-screen flex flex-col w-3/4 lg:w-52 sm:max-w-xs pt-6 pb-8 bg-gray-800 overflow-y-auto">
          <div className="px-4 pb-6 relative">
            <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">
              Main
            </h3>

            <motion.div
              id="selectedMenuBg"
              className={`absolute h-8 w-10/12 rounded bg-indigo-500 mix-blend-lighten`}
              initial={{ y: lastTopMenuDist }}
              animate={{ y: topMenuDist }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <ul className="mb-8 text-sm font-medium">
              {menuList.map((menuItem) => (
                <li key={menuItem.id}>
                  <MenuItem
                    id={menuItem.id}
                    href={menuItem.href}
                    isCurrent={menuItem.id === props.selectedMenuId}
                    icon={menuItem.icon}
                    label={menuItem.label}
                    selectedMenuIdCallBack={props.selectedMenuIdCallBack}
                  />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
