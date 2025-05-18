import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./SidebarLayout.css";

const SidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <div className="sidebar-layout">
      <button onClick={toggleSidebar} className="hamburger">
        ☰
      </button>
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <nav>
          <div className="logo">
            <img
              src={new URL("../assets/IZ LOGO.png", import.meta.url).href}
              alt="Logo"
              className="logo-img"
            />
            <h2 className="sidebar-title">Zapala Igor</h2>
          </div>
          <ul className="sidebar-menu">
            <li>
              <Link
                to="/"
                className="sidebar-button"
                onClick={() => setSidebarOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="sidebar-button"
                onClick={() => setSidebarOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/youtube"
                className="sidebar-button"
                onClick={() => setSidebarOpen(false)}
              >
                YouTube
              </Link>
            </li>
            <li>
              <Link
                to="/photography"
                className="sidebar-button"
                onClick={() => setSidebarOpen(false)}
              >
                Photography
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="sidebar-button"
                onClick={() => setSidebarOpen(false)}
              >
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
