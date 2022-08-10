import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { GridSample } from "./components/GridSample";
import { FormsSample } from "./components/FormsSample";
import { UsersSample } from "./components/UsersSample";
import { TableSample } from "./components/TableSample";
import AnimatedPage from "./components/AnimatedPage";

function App() {
  const [selectedMenuId, setSelectedMenuID] = useState(1);
  const [lastSelectedMenuId, setLastSelectedMenuID] = useState(1);
  const [fromTop, setFromTop] = useState(true);

  useEffect(() => {
    setFromTop(selectedMenuId > lastSelectedMenuId);
    console.log("cur" + selectedMenuId)
    console.log("last" + lastSelectedMenuId)
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
                  <AnimatedPage fromTop={fromTop}>
                    <GridSample />
                  </AnimatedPage>
                }
              />
              <Route
                path="/data"
                element={
                  <AnimatedPage fromTop={fromTop}>
                    <TableSample />
                  </AnimatedPage>
                }
              />
              <Route
                path="/users"
                element={
                  <AnimatedPage fromTop={fromTop}>
                    <UsersSample />
                  </AnimatedPage>
                }
              />
              <Route
                path="/admin"
                element={
                  <AnimatedPage fromTop={fromTop}>
                    <FormsSample />
                  </AnimatedPage>
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
