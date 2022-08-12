import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { AnimatedContainer } from "./components/AnimatedContainer";

function App() {
  const [selectedMenuId, setSelectedMenuID] = useState(0);
  const [lastSelectedMenuId, setLastSelectedMenuID] = useState(0);
  const [menuIsGoingDown, setMenuIsGoingDown] = useState(1);

  const selectedMenuIdCallBack = (id: number) => {
    const lastSelectedMenuId = selectedMenuId;
    setLastSelectedMenuID(lastSelectedMenuId);
    setSelectedMenuID(id);
    const menuIsGoingDown = id >= lastSelectedMenuId;

    menuIsGoingDown ? setMenuIsGoingDown(1) : setMenuIsGoingDown(-1);
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex">
        <NavBar
          selectedMenuId={selectedMenuId}
          lastSelectedMenuId={lastSelectedMenuId}
          selectedMenuIdCallBack={selectedMenuIdCallBack}
        />
        <AnimatedContainer
          menuIsGoingDown={menuIsGoingDown}
          selectedMenuId={selectedMenuId}
        />
      </div>
    </div>
  );
}

export default App;
