import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import AnimatedPage from "./components/AnimatedPage";
import { UsersSample } from "./components/UsersSample";
import { FormsSample } from "./components/FormsSample";
import { TableSample } from "./components/TableSample";
import { GridSample } from "./components/GridSample";

function App() {
  const [menuSelector, setMenuSelector] = useState<{
    currentMenuId: number;
    lastSelectedMenuId: number;
    menuIsGoingDown: number;
  }>({
    currentMenuId: 0,
    lastSelectedMenuId: 0,
    menuIsGoingDown: 1,
  });

  const [syncMenuSelectedId, setSyncMenuSelectedId] = useState(0);
  const location = useLocation();
  useEffect(
    () => setSyncMenuSelectedId(menuSelector.currentMenuId),
    [menuSelector]
  );

  const selectedMenuIdCallBack = (id: number) => {
    setMenuSelector((prevMenuSelector) => {
      const menuIsGoingDown = id >= prevMenuSelector.currentMenuId ? 1 : -1;
      return {
        currentMenuId: id,
        lastSelectedMenuId: prevMenuSelector.currentMenuId,
        menuIsGoingDown: menuIsGoingDown,
      };
    });
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex">
        <NavBar
          selectedMenuId={menuSelector.currentMenuId}
          lastSelectedMenuId={menuSelector.lastSelectedMenuId}
          selectedMenuIdCallBack={selectedMenuIdCallBack}
        />
        <div className="w-10/12 m-4 overflow-hidden ">
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route
                path="/"
                element={
                  <AnimatedPage
                    key={"GridSample"}
                    menuIsGoingDown={menuSelector.menuIsGoingDown}
                    selectedMenuId={menuSelector.currentMenuId}
                  >
                    <GridSample />
                  </AnimatedPage>
                }
              />
              <Route
                path="/data"
                element={
                  <AnimatedPage
                    key={"UsersSample"}
                    menuIsGoingDown={menuSelector.menuIsGoingDown}
                    selectedMenuId={menuSelector.currentMenuId}
                  >
                    <UsersSample />
                  </AnimatedPage>
                }
              />
              <Route
                path="/users"
                element={
                  <AnimatedPage
                    key={"TableSample"}
                    menuIsGoingDown={menuSelector.menuIsGoingDown}
                    selectedMenuId={menuSelector.currentMenuId}
                  >
                    <TableSample />
                  </AnimatedPage>
                }
              />
              <Route
                path="/admin"
                element={
                  <AnimatedPage
                    key={"FormsSample"}
                    menuIsGoingDown={menuSelector.menuIsGoingDown}
                    selectedMenuId={menuSelector.currentMenuId}
                  >
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
