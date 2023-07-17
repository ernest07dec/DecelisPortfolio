// Components

import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import "./index.css";
import background from "./assets/bg-4.jpg";

const App = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Header />

      <AllRoutes />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
