import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PortfolioDetail from "./pages/PortfolioDetail.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";

function App() {
  const isComponentValid = (Component) =>
    typeof Component === "function" ||
    (Component && typeof Component === "object");

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {isComponentValid(Header) ? (
          <Header />
        ) : (
          <div style={{ color: "red" }}>Header Component Error</div>
        )}

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                isComponentValid(HomePage) ? (
                  <HomePage />
                ) : (
                  <div>HomePage Error</div>
                )
              }
            />

            <Route
              path="/about"
              element={
                isComponentValid(AboutPage) ? (
                  <AboutPage />
                ) : (
                  <div>AboutPage Error</div>
                )
              }
            />
            <Route
              path="/services"
              element={
                isComponentValid(ServicesPage) ? (
                  <ServicesPage />
                ) : (
                  <div>ServicesPage Error</div>
                )
              }
            />
            <Route
              path="/portfolio"
              element={
                isComponentValid(PortfolioPage) ? (
                  <PortfolioPage />
                ) : (
                  <div>PortfolioPage Error</div>
                )
              }
            />

            {/* Portfolio Detail Route */}
            <Route
              path="/portfolio/:id"
              element={
                isComponentValid(PortfolioDetail) ? (
                  <PortfolioDetail />
                ) : (
                  <div>PortfolioDetail Error</div>
                )
              }
            />

            <Route
              path="/blog"
              element={
                isComponentValid(BlogPage) ? (
                  <BlogPage />
                ) : (
                  <div>BlogPage Error</div>
                )
              }
            />

            {/* Blog Detail Route */}
            <Route
              path="/blog/:id"
              element={
                isComponentValid(BlogDetail) ? (
                  <BlogDetail />
                ) : (
                  <div>BlogDetail Error</div>
                )
              }
            />

            <Route
              path="/contact"
              element={
                isComponentValid(ContactPage) ? (
                  <ContactPage />
                ) : (
                  <div>ContactPage Error</div>
                )
              }
            />

            <Route
              path="*"
              element={
                isComponentValid(NotFoundPage) ? (
                  <NotFoundPage />
                ) : (
                  <div>NotFoundPage Error</div>
                )
              }
            />
          </Routes>
        </main>

        {isComponentValid(Footer) ? (
          <Footer />
        ) : (
          <div style={{ color: "red", padding: "20px" }}>
            Footer Component Error
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
