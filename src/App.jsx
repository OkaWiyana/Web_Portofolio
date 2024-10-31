import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Homepage from "./pages/homepage";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <Homepage />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
