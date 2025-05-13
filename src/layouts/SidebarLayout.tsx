import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import type { ReactNode } from "react";

import "./SidebarLayout.css";

const SidebarLayout = () => {
  return (
    <div className="sidebar-layout">
      <aside className="sidebar">
        <nav>
          <h2 className="sidebar-title">Zapala Igor</h2>
          <ul className="sidebar-menu">
            <li>
              <Link to="/" className="sidebar-button">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="sidebar-button">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="sidebar-button">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
export default SidebarLayout;
