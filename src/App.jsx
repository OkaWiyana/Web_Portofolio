import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import ProjectDetail from "./pages/ProjectDetail";
// import KeystaticPage from "./pages/KeystaticPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <>
              <Navbar />
              <ProjectDetail />
              <Footer />
            </>
          }
        />
        {/* <Route path="/keystatic/*" element={<KeystaticPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
