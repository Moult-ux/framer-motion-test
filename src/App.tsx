import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { GridSample } from "./components/GridSample";
import { FormsSample } from "./components/FormsSample";
import { UsersSample } from "./components/UsersSample";
import { TableSample } from "./components/TableSample";
import AnimatedPage from "./components/AnimatedPage";

const exitDistance = 100;
const pageMotionVariants: Variants = {
  top: {
    opacity: 1,
    y: -exitDistance,
  },
  bottom: {
    opacity: 1,
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
  // const [fromTop, setFromTop] = useState(1);
  const menu0Animation = useAnimation();
  const menu1Animation = useAnimation();
  const menu2Animation = useAnimation();
  const menu3Animation = useAnimation();

  useEffect(() => {
    menu0Animation.start("normal");
    menu1Animation.start("normal");
  }, [selectedMenuId]);

  // useEffect(() => {
  //   (async () => {
  //     if (selectedMenuId > lastSelectedMenuId) {
  //       enterPageAnimation.start("top");
  //       await exitPageAnimation.start("bottom");
  //       enterPageAnimation.start("normal");
  //     } else {
  //       enterPageAnimation.start("bottom");
  //       await exitPageAnimation.start("top");

  //       enterPageAnimation.start("normal");
  //     }
  //   })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [fromTop, selectedMenuId, lastSelectedMenuId]);

  enum Direction {
    TOP = "top",
    BOTTOM = "bottom",
  }

  function animatePage(direction: Direction, menuId: number) {
    switch (menuId) {
      case 0:
        menu0Animation.start("normal");
        break;
      case 1:
        menu1Animation.start("normal");
        break;
      case 2:
        menu2Animation.start("normal");
        break;
      case 3:
        menu3Animation.start("normal");
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

    //Exiting page animation
    // animatePage(
    //   menuIsGoingDown ? Direction.TOP : Direction.BOTTOM,
    //   lastSelectedMenuId
    // );
    //Entering page animation
    animatePage(menuIsGoingDown ? Direction.BOTTOM : Direction.TOP, id);
  };

  const location = useLocation();

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

        <div className="w-10/12 m-4 overflow-hidden">
          <AnimatePresence exitBeforeEnter={true}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    variants={pageMotionVariants}
                    initial="top"
                    animate={menu0Animation}
                    transition={{ duration: 2 }}
                  >
                    <GridSample />
                  </motion.div>
                }
              />
              <Route
                path="/data"
                element={
                  <motion.div
                    variants={pageMotionVariants}
                    initial="top"
                    animate={menu1Animation}
                    transition={{ duration: 2 }}
                  >
                    <TableSample />
                  </motion.div>
                }
              />
              <Route
                path="/users"
                element={
                  <motion.div
                    variants={pageMotionVariants}
                    initial="top"
                    animate={menu2Animation}
                    transition={{ duration: 2 }}
                  >
                    <UsersSample />
                  </motion.div>
                }
              />
              <Route
                path="/admin"
                element={
                  <motion.div
                    variants={pageMotionVariants}
                    initial="top"
                    animate={menu3Animation}
                    transition={{ duration: 2 }}
                  >
                    <FormsSample />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
