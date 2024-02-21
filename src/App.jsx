
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="*"
        element={
          <>
            <NavBar />
            <HomePage />
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
