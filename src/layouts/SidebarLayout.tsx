import { Outlet, Link } from "react-router-dom";
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
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="sidebar-button">
                About
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
