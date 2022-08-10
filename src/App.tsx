import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GridSample } from "./components/GridSample";
import { FormsSample } from "./components/FormsSample";
import { UsersSample } from "./components/UsersSample";
import { TableSample } from "./components/TableSample";

function App() {
  const [selectedMenuId, setSelectedMenuID] = useState(1);
  const [lastSelectedMenuId, setLastSSelectedMenuID] = useState(1);

  const selectedMenuIdCallBack = (id: number) => {
    setLastSSelectedMenuID(selectedMenuId);
    setSelectedMenuID(id);
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

        <div className="w-10/12 m-4">
          <Routes>
            <Route path="/" element={<GridSample />} />
            <Route path="/data" element={<TableSample />} />
            <Route path="/users" element={<UsersSample />} />
            <Route path="/admin" element={<FormsSample />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
