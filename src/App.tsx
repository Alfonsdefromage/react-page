import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Youtube from "./pages/Youtube";
import Photography from "./pages/Photography";
import SidebarLayout from "./layouts/SidebarLayout";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-content-wrapper">
        <Router>
          <Routes>
            <Route element={<SidebarLayout />}>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/youtube" element={<Youtube />} />
              <Route path="/photography" element={<Photography />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
