import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import Test from "../pages/Test/Test";



function AllRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AllRoutes;
