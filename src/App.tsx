import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Youtube from "./pages/Youtube";
import SidebarLayout from "./layouts/SidebarLayout";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/youtube" element={<Youtube />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
