import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SidebarLayout.css";
import {
  faGithub,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add the GitHub icon to the library
library.add(faGithub, faInstagram, faYoutube);

const SidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation().pathname;
  console.log(location);

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
                to="/about"
                className={`sidebar-button ${
                  location === "/about" ? "active" : ""
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`sidebar-button ${
                  location === "/projects" ? "active" : ""
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/youtube"
                className={`sidebar-button ${
                  location === "/youtube" ? "active" : ""
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                YouTube
              </Link>
            </li>
            <li>
              <Link
                to="/photography"
                className={`sidebar-button ${
                  location === "/photography" ? "active" : ""
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                Photography
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sns">
          <a
            href="https://github.com/Alfonsdefromage"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSidebarOpen(false)}
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="lg"
              color="#495867"
            />
          </a>
          <a
            href="https://www.instagram.com/densetsugaijin/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSidebarOpen(false)}
          >
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              size="lg"
              color="#495867"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCCVLSIZNRpfq1q4RQ2rCXSw"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setSidebarOpen(false)}
          >
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              size="lg"
              color="#495867"
            />
          </a>
        </div>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};
export default SidebarLayout;
