import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import PageNotFound from "./components/PageNotFound";

import LandingPage from "./pages/Landingpage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Register Page */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Home Page */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

          {/* Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;  