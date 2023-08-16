import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { PlayGround } from "../pages/PlayGround";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/playground" element={<PlayGround />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};
