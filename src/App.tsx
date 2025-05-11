import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import SidebarLayout from "./layouts/SidebarLayout";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
