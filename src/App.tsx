import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { GridSample } from "./components/GridSample";
import { FormsSample } from "./components/FormsSample";
import { UsersSample } from "./components/UsersSample";
import { TableSample } from "./components/TableSample";
import AnimatedPage from "./components/AnimatedPage";

const exitDistance = 400;
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
  const [selectedMenuId, setSelectedMenuID] = useState(1);
  const [lastSelectedMenuId, setLastSelectedMenuID] = useState(1);
  const [fromTop, setFromTop] = useState(1);
  const enterPageAnimation = useAnimation();
  const exitPageAnimation = useAnimation();

  useEffect(() => {
    (async () => {
      if (selectedMenuId > lastSelectedMenuId) {
        await enterPageAnimation.start("top");
        await exitPageAnimation.start("bottom");
        setFromTop(1);
      } else {
        await enterPageAnimation.start("bottom");
        await exitPageAnimation.start("top");
        setFromTop(-1);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMenuId, lastSelectedMenuId]);

  const selectedMenuIdCallBack = (id: number) => {
    setLastSelectedMenuID(selectedMenuId);
    setSelectedMenuID(id);
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
                    initial={fromTop === 1 ? "top" : "bottom"}
                    animate={enterPageAnimation}
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
                    initial={fromTop === 1 ? "top" : "bottom"}
                    animate={enterPageAnimation}
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
                    initial={fromTop === 1 ? "top" : "bottom"}
                    animate={enterPageAnimation}
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
                    initial={fromTop === 1 ? "top" : "bottom"}
                    animate={enterPageAnimation}
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
