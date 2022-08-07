import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

        <div className="w-full">
          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/data" element={<h1>Data</h1>} />
            <Route path="/users" element={<h1>Users</h1>} />
            <Route path="/admin" element={<h1>Admin</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
