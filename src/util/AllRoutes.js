import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import NavBar from "../pages/NavBar/NavBar";
import { useState } from "react";

function AllRoutes() {
  const location = useLocation();
  const [AboutIsInView, setAboutIsInView] = useState(false);

  return (
    <AnimatePresence  mode="wait">
      <Routes location={location}>
        <Route path="/" element={<NavBar AboutIsInView={AboutIsInView} />}>
          <Route
            index
            element={<MainPage setAboutIsInView={setAboutIsInView} />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AllRoutes;
