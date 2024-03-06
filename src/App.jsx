import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./i18n"; // Initialize i18next
import Weather from "./components/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              {/**<HomePage /> */}
              <Weather />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
