import React from "react";
import HNavbar from "../components/HNavbar";
import VNavbar from "../components/VNavbar";
import DashboardGrid from "../components/pages/DashboardGrid";
import DashboardViewer from "../components/pages/DashboardViewer";
import { Routes, Route, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="grid grid-cols-[200px_auto] w-full bg-slate-600">
      <VNavbar />
      <div className="flex flex-col">
        <HNavbar />
        <Routes>
          <Route path="/" element={<DashboardGrid />} />
          <Route path="/dashboard" element={<DashboardViewer />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
