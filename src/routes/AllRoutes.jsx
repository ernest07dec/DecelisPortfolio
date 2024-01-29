import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// PAGES COMPILER IMPORTS
import {
  Home,
  About,
  Projects,
  PlayGround,
  PageNotFound,
} from "../pages/compiler";

export const AllRoutes = () => {
  const location = useLocation();
  return (
    <div>
      {/* FRAMER MOTION */}
      <AnimatePresence mode="wait">
        {/* ALL ROUTES */}
        <Routes key={location.pathname} location={location}>
          {/* HOME */}
          <Route path="/" element={<Home />}></Route>
          {/* ABOUT */}
          <Route path="/about" element={<About />}></Route>
          {/* PROJECTS */}
          <Route path="/projects" element={<Projects />}></Route>
          {/* PLAYGROUND */}
          <Route path="/playground" element={<PlayGround />}></Route>
          {/* Routes error handling */}
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};
