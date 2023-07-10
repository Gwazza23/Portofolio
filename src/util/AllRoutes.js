import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import NavBar from "../pages/NavBar/NavBar";
import AboutPage from "../pages/AboutPage/AboutPage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";
import ContactPage from "../pages/ContactPage/ContactPage";

function AllRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence  mode="wait">
      <Routes location={location}>
        <Route path="/" element={<NavBar />}>
          <Route index element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AllRoutes;
