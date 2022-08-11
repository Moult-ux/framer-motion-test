import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { GridSample } from "./components/GridSample";
import { FormsSample } from "./components/FormsSample";
import { UsersSample } from "./components/UsersSample";
import { TableSample } from "./components/TableSample";

const exitDistance = 600;
const pageMotionVariants: Variants = {
  top: {
    opacity: 0,
    y: -exitDistance,
  },
  bottom: {
    opacity: 0,
    y: exitDistance,
  },
  normal: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  const [selectedMenuId, setSelectedMenuID] = useState(0);
  const [lastSelectedMenuId, setLastSelectedMenuID] = useState(0);
  const [fromTop, setFromTop] = useState(1);
  const menu0Animation = useAnimation();
  const menu1Animation = useAnimation();
  const menu2Animation = useAnimation();
  const menu3Animation = useAnimation();
  enum Direction {
    TOP = "top",
    BOTTOM = "bottom",
    NORMAL = "normal",
  }
  useEffect(() => {
    //Exiting page animation
    animatePage(
      fromTop === 1 ? Direction.TOP : Direction.BOTTOM,
      lastSelectedMenuId
    );
    //Entering page animation
    animatePage(Direction.NORMAL, selectedMenuId);
  }, [selectedMenuId, fromTop]);

  function animatePage(direction: Direction, menuId: number) {
    switch (menuId) {
      case 0:
        menu0Animation.start(direction);
        break;
      case 1:
        menu1Animation.start(direction);
        break;
      case 2:
        menu2Animation.start(direction);
        break;
      case 3:
        menu3Animation.start(direction);
        break;
      default:
        break;
    }
  }

  const selectedMenuIdCallBack = (id: number) => {
    const lastSelectedMenuId = selectedMenuId;
    setLastSelectedMenuID(lastSelectedMenuId);
    setSelectedMenuID(id);
    const menuIsGoingDown = id >= lastSelectedMenuId;

    menuIsGoingDown ? setFromTop(1) : setFromTop(-1);
    console.log("goging dowdn : " + menuIsGoingDown);
  };

  return (
    <div className="w-screen h-screen">
      {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
        <button className="btn">Bouton daisyUi framer</button>
      </motion.div> */}
      <div className="flex">
        <NavBar
          selectedMenuId={selectedMenuId}
          lastSelectedMenuId={lastSelectedMenuId}
          selectedMenuIdCallBack={selectedMenuIdCallBack}
        />

        <div
          className="w-10/12 m-4 overflow-hidden"
          onClick={() => {
            console.log("clicked");
          }}
        >
          {selectedMenuId === 0 && (
            <motion.div
              variants={pageMotionVariants}
              initial={fromTop === 1 ? "top" : "bottom"}
              animate={menu0Animation}
              transition={{ duration: 2 }}
            >
              <h1>Dashboard</h1>
              <GridSample />
            </motion.div>
          )}

          {selectedMenuId === 1 && (
            <motion.div
              variants={pageMotionVariants}
              initial={fromTop === 1 ? "top" : "bottom"}
              animate={menu1Animation}
              transition={{ duration: 2 }}
            >
              <h1>Data</h1>
              <TableSample />
            </motion.div>
          )}
          {selectedMenuId === 2 && (
            <motion.div
              variants={pageMotionVariants}
              initial={fromTop === 1 ? "top" : "bottom"}
              animate={menu2Animation}
              transition={{ duration: 2 }}
            >
              <h1>Forms</h1>
              <FormsSample />
            </motion.div>
          )}
          {selectedMenuId === 3 && (
            <motion.div
              variants={pageMotionVariants}
              initial={fromTop === 1 ? "top" : "bottom"}
              animate={menu3Animation}
              transition={{ duration: 2 }}
            >
              <h1>Users</h1>
              <UsersSample />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
