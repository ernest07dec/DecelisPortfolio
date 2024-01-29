// Components

import { Header, Footer } from "./components/header_footer/compiler/index";
import { AllRoutes } from "./routes/AllRoutes";
import "./index.css";
import background from "./assets/bg-4.jpg";

const App = () => {
  return (
    // OVERALL BACKGROUND
    <div
      className="min-h-screen w-full overflow-hidden bg-fixed bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* HEADER */}
      <Header />
      {/* ALLROUTES */}
      <AllRoutes />
      {/* FOOTER */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
