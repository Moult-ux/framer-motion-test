import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function VNavbar() {
  return (
    <nav className="bg-base-100 border-r border-stone-300 min-h-screen">
      <ul className="menu  w-full">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="bordered">
          <Link to="/dashboards">Dashboards</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
